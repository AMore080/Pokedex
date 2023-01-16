import React, { useState, useEffect } from "react";
import { Grid, Card, Col, Button, Text, Popover, Container, Loading } from '@nextui-org/react'
import { QUERY_SINGLEPOKEMON, QUERY_POKEMON, QUERY_POKEMONDATA } from "../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";
import PokeCards from "../components/pokemonCard";
import PaginationBar from "../components/pagination";

const Main = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { loading , data: pokemonData, fetchMore } = useQuery(QUERY_POKEMONDATA, {
      variables: {
        offset: currentPage 
      }
    });

    const pokemons = pokemonData?.pokemonData?.results
    const rootPokeData = pokemonData?.pokemonData.count;
    console.log(currentPage);
    console.log(pokemons)
    
    useEffect(() => {
      fetchMore({
        variables: {
          offset: currentPage
        }
      })
    }, [currentPage])
    
    return (
      <div justify='center' css={{margin: 'auto', display: "flex"}}>
          {loading ? (
            <Loading
              justify='center'
              css={{ margin: 'auto', display: "flex" }}
              loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
            />
          ) : (
        <Grid.Container gap={2} justify='center' css={{maxWidth: "80%", margin: 'auto'}}>
            {pokemons.map((pokemon) => {
                return (
                  <Grid lg={2} xs={6} md={3} css={{height: "200px"}}>
                    <PokeCards pokemonName={pokemon.name} />
                  </Grid>
                )
            })}
        </Grid.Container>
        )}
        <Grid.Container justify='center'>
          <PaginationBar pokemonData={{rootPokeData}} setCurrentPage={setCurrentPage}/>
        </Grid.Container>
      </div>
    )
};

export default Main;
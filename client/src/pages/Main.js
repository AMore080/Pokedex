import React, { useState, useEffect } from "react";
import { Grid, Card, Col, Button, Text, Popover, Container, Loading } from '@nextui-org/react'
import { QUERY_SINGLEPOKEMON, QUERY_POKEMON, QUERY_POKEMONDATA } from "../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";
import PokeCards from "../components/pokemonCard";
import PaginationBar from "../components/pagination";

const Main = () => {
    const { loading , data: pokemonData } = useQuery(QUERY_POKEMONDATA);
    const nextPokemonUrl = pokemonData?.pokemonData.next;
    const [nextURL, setNextUrl] = useState(nextPokemonUrl);

    console.log(nextPokemonUrl);
    const pokemons = pokemonData?.pokemonData?.results
    
    return (
      <div>
          {loading ? (
            <Loading
              justify='center'
              css={{ margin: 'auto' }}
              loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
            />
          ) : (
        <Grid.Container gap={2} justify='center' css={{maxWidth: "80%", margin: 'auto'}}>
            {pokemons.map((pokemon) => {
                return (
                  <Grid lg={2} xs={6} md={3}>
                    <PokeCards pokemonName={pokemon.name} />
                  </Grid>
                )
            })}
        </Grid.Container>
        )}
        <PaginationBar nextURL={{nextURL}} justify='center'/>
      </div>
    )
};

export default Main;
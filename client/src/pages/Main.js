import React, { useState, useEffect } from "react";
import { Grid, Card, Col, Button, Text, Popover, Container, Loading } from '@nextui-org/react'
import { QUERY_SINGLEPOKEMON, QUERY_POKEMON } from "../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";
import axios from 'axios';
import PokeCards from "../components/pokemonCard";

const Main = () => {
    const { loading, data: pokemonData } = useQuery(QUERY_POKEMON);

    const pokemons = pokemonData?.pokemons
    
    return (
      <div>
          {loading ? (
            <Loading
              justify='center'
              css={{ margin: 'auto' }}
              loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
            />
          ) : (
        <Grid.Container gap={2} justify='center' css={{minWidth: "50%"}}>
            {pokemons.map((pokemon) => {
                return (
                  <Grid lg={4} xs={4} md={3}>
                    <PokeCards pokemonName={pokemon.name} />
                  </Grid>
                )
            })}
        </Grid.Container>
        )}
      </div>
    )
};

export default Main;
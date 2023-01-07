import React, { useState, useEffect } from "react";
import { Grid, Card, Col, Button, Text, Popover, Container, Loading } from '@nextui-org/react'

import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_POKEMON, QUERY_SINGLEPOKEMON } from "../utils/queries";
import axios from 'axios';

const Main = () => {
    const { loading, data } = useQuery(QUERY_POKEMON);
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [imgSrc, setImg] = useState('');

    const pokemons = data?.pokemons

    useEffect(() => {
    const handlePokemonSprite = async (pokemonName) => {
      try {
        console.log(pokemonName);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        setImg(response.data.sprites.front_default);
      } catch (error) {
        throw error;
      }
    }
  }, []);
    
    return (
      <div>
          {loading ? (
            <Loading
              justify='center'
              css={{ margin: 'auto' }}
              loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
            />
          ) : (
        <Grid.Container gap={2} justify='center'>
            {pokemons.map((pokemon) => {
              handlePokemonSprite(pokemon.name)
                return (
                  <Grid lg={4} xs={4} md={3}>
                    <Card key={pokemon.name}>
                      <Card.Body css={{background: '#2b2d42'}}>
                        <Card.Image 
                          alt={`${pokemon.name}`}
                          src={"a"}
                        />
                        <Text>{pokemon.name}</Text>
                      </Card.Body>
                    </Card>
                  </Grid>
                )
            })}
        </Grid.Container>
        )}
      </div>
    )
};

export default Main;
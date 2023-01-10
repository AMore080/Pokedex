import React, { useState, useEffect } from "react";
import { Grid, Card, Col, Button, Text, Popover, Container, Loading } from '@nextui-org/react'
import { useQuery } from "@apollo/client";
import { QUERY_SINGLEPOKEMON } from "../utils/queries";

const PokeCards = (props) => {
    console.log(props);
    const pokemonName = props.pokemonName;

    const { loading, data: singlePokemonData } = useQuery(QUERY_SINGLEPOKEMON, {
        skip: !pokemonName,
        variables: { pokemonName }
      })

      console.log(singlePokemonData);
    return (
        <Card key={pokemonName}>
        <Card.Body css={{background: '#2b2d42'}}>
          <Card.Image 
            alt={`${pokemonName}`}
            src={`${singlePokemonData?.singlePokemon.sprites.front_default}`}
          />
          <Text>{pokemonName}</Text>
        </Card.Body>
      </Card>
    )
}

export default PokeCards;
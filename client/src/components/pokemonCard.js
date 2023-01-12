import React, { useState, useEffect } from "react";
import { Grid, Card, Col, Button, Text, Popover, Container, Loading, Row } from '@nextui-org/react'
import { useQuery } from "@apollo/client";
import { QUERY_SINGLEPOKEMON } from "../utils/queries";

const PokeCards = (props) => {
    console.log(props);
    const pokemonName = props.pokemonName;

    function capitalizeFirstLetter(string) {
      return pokemonName.charAt(0).toUpperCase() + string.slice(1);
    }

    const { loading, data: singlePokemonData } = useQuery(QUERY_SINGLEPOKEMON, {
        skip: !pokemonName,
        variables: { pokemonName }
      })

    return (
      <>
      {loading ? (
        <Loading
          justify='center'
          css={{ margin: 'auto' }}
          loadingCss={{ $$loadingSize: "50px", $$loadingBorder: "10px" }}
        />
      ) : (
        <Card key={pokemonName}>
          <Card.Body css={{background: '#2b2d42'}}>
            <Card.Image 
              alt={`${pokemonName}`}
              src={`${singlePokemonData?.singlePokemon.sprites.front_default}`}
            />
            <Text
            hideIn={"xs"}
            h3
            color="#EDF2F4"
            >{capitalizeFirstLetter(pokemonName)}</Text>
            <Row justify="space-around">
              <Button size="xs" color="error">
                Share
              </Button>
            </Row>
          </Card.Body>
        </Card>
      )}
      </>
    )
}

export default PokeCards;
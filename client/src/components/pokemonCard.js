import React, { useState, useEffect } from "react";
import { Card, Button, Text, Modal, Loading, Row, Image } from '@nextui-org/react'
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_SINGLEPOKEMON } from "../utils/queries";

// Type Icons
import Bug from "../img/Bug";
import Dark from "../img/Dark";
import Dragon from '../img/Dragon';
import Electric from '../img/Electric';
import Fairy from '../img/Fairy';
import Fighting from '../img/Fighting';
import Fire from '../img/Fire';
import Flying from '../img/Flying';
import Ghost from '../img/Ghost';
import Grass from '../img/Grass';
import Ground from '../img/Ground';
import Ice from '../img/Ice';
import Normal from '../img/Normal';
import Poison from '../img/Poison';
import Psychic from '../img/Psychic';
import Rock from '../img/Rock';
import Steel from '../img/Steel';
import Water from '../img/Water';

const PokeCards = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [pokeTypings, setPokeTypings] = useState([]);
    const handler = () => setVisible(true);

    const pokeIconHandler = (pokeType) => {
      switch(pokeType){
        case 'bug':
          return <Bug />;
        case 'fire':
          return <Fire />
        case 'normal':
          return <Normal />
        case 'dark':
          return <Dark />
        case 'flying':
          return <Flying />
        case 'poison':
          return <Poison />
        case 'dragon':
          return <Dragon />
        case 'ghost':
          return <Ghost />
        case 'psychic':
          return <Psychic />
        case 'electric':
          return <Electric />
        case 'grass':
          return <Grass />
        case 'rock':
          return <Rock />
        case 'fairy':
          return <Fairy />
        case 'ground':
          return <Ground />
        case 'steel':
          return <Steel />
        case 'fighting':
          return <Fighting />
        case 'ice':
          return <Ice />
        case 'water':
          return <Water />
      }
    }

    const someFunc = async () => {
      handler();
      const { data } = await getSinglePokeType({variables: pokemonName});
      console.log(data?.singlePokemon.types);
      setPokeTypings(data?.singlePokemon.types);
    }

    const closeHandler = () => {
      setVisible(false);
      console.log('closed');
    }

    const pokemonName = props.pokemonName;

    function capitalizeFirstLetter(string) {
      return pokemonName.charAt(0).toUpperCase() + string.slice(1);
    }

    const { loading, data: singlePokemonData } = useQuery(QUERY_SINGLEPOKEMON, {
        skip: !pokemonName,
        variables: { pokemonName }
      })

    const [getSinglePokeType, { data: singlePokemonDataTypes } ]= useLazyQuery(QUERY_SINGLEPOKEMON, {
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
              css={{background: '#EDF2F4', 'border-radius': '30px' , padding: '1px'}}
              alt={`${pokemonName}`}
              src={`${singlePokemonData?.singlePokemon.sprites.front_default}`}
            />
            <Text
            hideIn={"xs"}
            h3
            color="#EDF2F4"
            >{capitalizeFirstLetter(pokemonName)}</Text>
            <Row justify="space-around">
                <Button size="xs" color="error" onPress={someFunc}>
                  Info
                </Button>
            </Row>
          </Card.Body>
        </Card>
      )}
        <Modal
        open={visible}
        onClose={closeHandler}
        >
          <Modal.Header>
            <Text b size={20}>
              {capitalizeFirstLetter(pokemonName)}
            </Text>
          </Modal.Header>
          <Modal.Body >
            <Image
              width={220}
              height={120}
              src={`${singlePokemonData?.singlePokemon.sprites.front_default}`}
            />
            <Row fluid="true" justify="center">
              {pokeTypings.map((pokemon) => {
                return(
                  <div>
                    {pokeIconHandler(pokemon.type.name)}
                  </div>
                )
              })}
            </Row>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default PokeCards;
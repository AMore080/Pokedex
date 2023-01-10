import { gql } from '@apollo/client';

export const QUERY_POKEMON = gql`
query allPokemon {
    pokemons {
      name
      url
    }
  }
`

export const QUERY_SINGLEPOKEMON = gql`
query singlePokemon($pokemonName: String!) {
  singlePokemon(pokemonName: $pokemonName) {
    game_indices {
      game_index
      version {
        name
        url
      }
    }
    types {
      type {
        name
        url
      }
    }
    sprites {
      front_default
    }
  }
}
`
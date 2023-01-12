const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon {
        name: String!
        url: String!
    }

    type urlData {
        next: String!
        previous: String
        results: [Pokemon]
    }

    type Types {
        type: Type
    }

    type Type {
        name: String!
        url: String!
    }

    type Sprites {
        front_default: String!
    }


    type Version {
        name: String!
        url: String!
    }

    type Games {
        game_index: ID!
        version: Version
    }

    type SinglePokemon{
        game_indices: [Games]
        types: [Types]
        sprites: Sprites
    }

    type Query {
        pokemonData(limit: Int, offset: Int): urlData 
        pokemons: [Pokemon]
        singlePokemon(pokemonName: String!): SinglePokemon
    }
`

module.exports = typeDefs;
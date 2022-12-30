const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pokemon {
        name: String!
        url: String!
    }

    type Query {
        pokemons: [Pokemon]
    }
`

module.exports = typeDefs;
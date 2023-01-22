//Server dependencies
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const path = require('path');


// utils
const { typeDefs, resolvers } = require('./schemas');
const PokemonAPI = require('./schemas/pokemon-api');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            PokemonAPI: new PokemonAPI()
        }
    }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on PORT ${PORT}`);
            console.log(`Use GRAPHQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
    })
};

startApolloServer(typeDefs, resolvers);
const resolvers = {
    Query: {
        pokemons: async (parent,args, { dataSources }) => {
            try {
                const allPokemons = await dataSources.PokemonAPI.getPokemon();
                return allPokemons.map(pokemon => ({
                    name: pokemon.name,
                    url: pokemon.url
                }))
            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = resolvers;
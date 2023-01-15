const resolvers = {
    Query: {
        pokemons: async (parent,args, { dataSources }) => {
            try {
                const allPokemons = await dataSources.PokemonAPI.getPokemon();
                return allPokemons.map(pokemon => ({
                    name: pokemon.name,
                    url: pokemon.url,
                }))
            } catch (error) {
                throw error;
            }
        },
        pokemonData: async (parent,args,{dataSources}) => {
            try {
                const pokemonData = await dataSources.PokemonAPI.getPokemonData(args.offset);
                return pokemonData;
            } catch (error) {
                throw error;
            }
        },
        singlePokemon: async (parent,args,{dataSources}) => {
            try {
                const pokemon = await dataSources.PokemonAPI.getSinglePokemon(args.pokemonName)
                return pokemon;
            } catch {
                throw error;
            }
        },
    }
}

module.exports = resolvers;
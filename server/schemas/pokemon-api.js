const { RESTDataSource } = require('@apollo/datasource-rest');

class PokemonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/'
    }

    async getPokemon() {
        const data = await this.get(`/pokemon/`);
        return data.results;
    }

    async getSinglePokemon(pokemonName) {
        const data = await this.get(`/pokemon/${pokemonName}`)
        return data;
    }

    async getPokemonData(offset, limit) {
        const data = await this.get(`/pokemon/?offset=${offset}&limit=20`)
        return data;
    }
}

module.exports = PokemonAPI;
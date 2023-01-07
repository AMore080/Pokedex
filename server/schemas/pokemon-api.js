const { RESTDataSource } = require('@apollo/datasource-rest');

class PokemonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/'
    }

    async getPokemon() {
        const data = await this.get(`/pokemon/?offset=0&limit=20`);
        return data.results;
    }

    async getSinglePokemon(pokemonName) {
        const data = await this.get(`/pokemon/${pokemonName}`)
        return data;
    }
}

module.exports = PokemonAPI;
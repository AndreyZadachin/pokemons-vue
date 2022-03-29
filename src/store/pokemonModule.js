import axios from 'axios';

export default {
  state() {
    return {
      pokemons: [],
    };
  },
  mutations: {
    SET_POKEMONS_TO_STATE: (state, pokemon) => {
      state.pokemons.unshift(pokemon);
    },
    SET_POKEMONS_INDEX_BY_ID: (state, fromIndex, toIndex) => {
      let element = state.pokemons[fromIndex];
      state.pokemons.splice(fromIndex, 1);
      state.pokemons.splice(toIndex, 0, element);
    },
  },
  getters: {
    GET_POKEMON(state) {
      return state.pokemons;
    },
    GET_POKEMON_BY_ID: (state) => (id) => {
      return state.pokemons.find((pokemon) => pokemon.id == id);
    },
  },
  actions: {
    GET_POKEMON_FROM_API({ commit }) {
      let id = Math.floor(Math.random() * (898 - 1 + 1)) + 1;
      return axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((pokemon) => {
          commit('SET_POKEMONS_TO_STATE', pokemon.data);
          return pokemon;
        })
        .catch((error) => {
          alert(error.message);
          return error;
        });
    },
  },
};

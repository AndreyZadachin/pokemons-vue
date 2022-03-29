<template>
  <form>
    <v-text-field v-model.trim="searchValue" label="Введите имя на английском или ID номер"></v-text-field>
    <v-btn class="mr-4" @click="searchPokemon"> Найти </v-btn>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {},
  data: () => ({
    searchValue: '',
  }),
  computed: {
    ...mapGetters(['GET_POKEMON_BY_ID', 'GET_POKEMON']),
    ...mapMutations(['SET_POKEMONS_TO_STATE', 'SET_POKEMONS_INDEX_BY_ID']),
  },
  methods: {
    searchPokemon() {
      let id = this.searchValue.toLowerCase();

      if (this.GET_POKEMON_BY_ID(id)) {
        let index = this.GET_POKEMON.findIndex((el) => el.id == id);

        this.$store.commit('SET_POKEMONS_INDEX_BY_ID', index, 0);
        this.searchValue = '';
      } else {
        this.axios
          .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((responce) => this.$store.commit('SET_POKEMONS_TO_STATE', responce.data))
          .then((this.searchValue = ''))
          .catch(() => alert('Покемон не найден'));
      }
    },
  },
};
</script>

<style scoped></style>

<template>
  <v-container class="mx-auto">
    <SearchInput />
    <Pokemon v-if="GET_POKEMON[0]" :pokemon_data="GET_POKEMON[0]" :key="GET_POKEMON[0].id" />
    <v-main class="text-h6 text-center" v-else>Данные загружаются, пожалуйста подождите</v-main>
  </v-container>
</template>

<script>
import SearchInput from '../components/SearchInput.vue';
import Pokemon from '../components/Pokemon.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    SearchInput,
    Pokemon,
  },
  computed: {
    ...mapGetters(['GET_POKEMON']),
  },
  methods: {
    ...mapActions(['GET_POKEMON_FROM_API']),
  },
  mounted() {
    this.GET_POKEMON_FROM_API();
  },
};
</script>

<style scoped></style>

<template>
  <v-col class="d-flex justify-center mt-8">
    <router-link
      class="text-decoration-none"
      :to="{
        name: 'pokemonDetails',
        params: {
          id: pokemon_data.id,
          pokemon_details: pokemon_data,
        },
      }"
    >
      <v-card class="d-flex justify-center flex-column align-center" width="250">
        <v-card-title>{{ pokemon_data.name }}</v-card-title>
        <v-card-text class="pb-0">ID {{ pokemon_data.id }}</v-card-text>
        <v-img class="mb-4" width="100" height="100" :src="pokemon_data.sprites.front_default" />
      </v-card>
    </router-link>
  </v-col>
</template>

<script>
export default {
  props: {
    pokemon_data: {
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped></style>

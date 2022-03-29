<template>
  <v-col class="d-flex justify-center mt-8">
    <v-card class="d-flex justify-center flex-column align-center" width="250">
      <v-card-title>{{ pokemon_details.name }}</v-card-title>
      <v-card-text class="pb-0">Рост {{ pokemon_details.height }}</v-card-text>
      <v-card-text class="pt-1">Вес {{ pokemon_details.weight }}</v-card-text>
      <v-card-text class="pt-1">Начальный опыт {{ pokemon_details.base_experience }}</v-card-text>

      <v-img class="mb-0" max-width="100" contain :src="pokemon_details.sprites.front_default" />
      <v-img class="mb-0" max-width="100" contain :src="pokemon_details.sprites.back_default" />
      <v-img class="mb-0" max-width="100" contain :src="pokemon_details.sprites.front_shiny" />
      <v-img class="mb-0" max-width="100" contain :src="pokemon_details.sprites.back_shiny" />
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    pokemon_details: {},
  },
};
</script>

<style scoped></style>

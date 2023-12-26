<script setup lang="ts">
import { onMounted, reactive, ref, computed } from 'vue'
import type { Pokemon } from '../interfaces/pokemon'

import ListPokemons from '@/components/ListPokemons.vue'
import CardPokemonSelected from '@/components/CardPokemonSelected.vue'

let urlBaseSvg = ref(
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
)
let pokemons = reactive(ref<Pokemon[]>())
let searchPokemonField = ref('')
let selectedPokemon = reactive(ref<Pokemon>())
let isLoading = ref(false)

onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then((res) => res.json())
    .then((res) => {
      return (pokemons.value = res.results)
    })
})

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemonField.value) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(searchPokemonField.value.toLocaleLowerCase())
    )
  }

  return pokemons.value
})

const selectPokemon = async (pokemon: Pokemon) => {
  isLoading.value = true

  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => (selectedPokemon.value = res))
    .catch((err) => alert(err))
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<template>
  <main>
    <div class="container text-body-secondary">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <CardPokemonSelected
            :name="selectedPokemon?.name"
            :base_experience="selectedPokemon?.base_experience"
            :height="selectedPokemon?.height"
            :img="selectedPokemon?.sprites.other.dream_world.front_default"
            :isLoading="isLoading"
          />
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="mb-3">
                <label hidden for="searchPokemonField" class="form-label">Pesquisar...</label>

                <input
                  v-model="searchPokemonField"
                  type="text"
                  class="form-control"
                  id="searchPokemonField"
                  placeholder="Pesquisar..."
                />
              </div>

              <ListPokemons
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                @click="selectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-list {
  overflow-y: scroll;
  overflow-x: hidden;

  max-height: 75vh;
}
</style>

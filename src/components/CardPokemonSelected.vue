<script setup lang="ts">
const { name, base_experience, height, img, isLoading } = defineProps([
  'name',
  'base_experience',
  'height',
  'img',
  'isLoading'
])
</script>

<template>
  <div
    class="card card-pokemon-selected"
    :class="isLoading ? '' : 'animate__animated animate__flipInY'"
  >
    <img v-if="name" :src="img" class="card-img-top p-4" :alt="name" />

    <img v-else src="../assets/egg_pokemon.svg" class="card-img-top p-4" alt="???" />

    <div class="card-body">
      <h5 class="card-title text-center">{{ name || '???' }}</h5>

      <hr />

      <div class="row text-center">
        <section class="col">
          <strong>XP:</strong>

          <span>{{ base_experience }}</span>
        </section>

        <section class="col">
          <strong>Altura:</strong>
          <span>{{ height }}</span>
        </section>
      </div>

      <div class="d-none d-md-block">
        <div class="row text-center mt-4">
          <section class="col">
            <strong>XP:</strong>

            <span>{{ base_experience }}</span>
          </section>

          <section class="col">
            <strong>Altura:</strong>
            <span>{{ height }}</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-pokemon-selected {
  background: rgb(78, 63, 251);
  background: radial-gradient(circle, rgba(221, 194, 18, 0.8) 0%, rgba(243, 53, 6, 0.8) 100%);

  height: 75vh;
}

.card-pokemon-selected img {
  height: 250px;
}

@media (max-width: 768px) {
  .card-pokemon-selected {
    height: 35vh;
    width: 50%;

    margin: 0 auto 10px auto;
  }

  .card-pokemon-selected img {
    height: 100px;
  }
}
</style>

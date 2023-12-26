<script setup lang="ts">
const { name, urlBaseSvg } = defineProps(['name', 'urlBaseSvg'])
</script>

<template>
  <div class="col-4 col-md-6 col-xl-3">
    <div class="card p-2 mb-3 card-list-pokemon">
      <p class="text-center">{{ name }}</p>

      <img :src="urlBaseSvg" class="card-img-top" alt="..." height="80" />
    </div>
  </div>
</template>

<style scoped>
.card-list-pokemon {
  background: rgb(78, 63, 251);
  background: radial-gradient(circle, rgba(78, 63, 251, 0.5) 0%, rgba(70, 251, 252, 0.3) 100%);

  cursor: pointer;
}

.card-list-pokemon:hover {
  background: rgb(78, 63, 251);
  background: radial-gradient(circle, rgba(78, 63, 251, 0.6) 0%, rgba(70, 251, 252, 0.4) 100%);
}

.card-list-pokemon img {
  transition: 0.3s;
}

.card-list-pokemon img:hover {
  padding: 0.1rem;
}
</style>

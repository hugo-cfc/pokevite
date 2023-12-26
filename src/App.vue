<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="#">
        <img
          alt="PokeVite"
          width="30"
          height="24"
          src="https://cdn-icons-png.flaticon.com/512/188/188987.png"
        />

        PokeVite
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="main">
    <router-view></router-view>
  </div>

  <footer class="bg-primary text-light">
    <div>Design in {{ new Date().getFullYear() }}</div>
  </footer>
</template>

<style>
body {
  overflow: hidden;

  min-height: 100vh;

  background: rgb(106, 196, 233);
  background: linear-gradient(
    0deg,
    rgba(106, 196, 233, 0.9360119047619048) 0%,
    rgba(0, 41, 150, 1) 100%
  );
}

footer {
  width: 100%;
  height: 56px;

  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

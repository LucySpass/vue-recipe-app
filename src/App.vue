<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="lg:grid lg:h-screen mx-auto w-screen max-w-7xl">
    <header>
      <img alt="Recipe book logo" src="@/assets/icon.svg" width="125" height="125" />

      <HelloWorld msg="You did it!" />

      <nav class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

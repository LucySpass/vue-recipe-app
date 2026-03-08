<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNavigation from './components/HeaderNavigation.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="lg:h-screen mx-auto max-w-7xl gap-2 flex flex-col">
    <header class="flex-col items-center gap-2">
      <div class="flex items-center gap-2 mb-4">
        <img alt="Recipe book logo" src="@/assets/icon.svg" width="64" height="64" />
        <HelloWorld msg="Recipe book" />
      </div>

      <HeaderNavigation />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

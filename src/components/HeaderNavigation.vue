<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="block rounded border-2 border-black bg-yellow-100 p-4 shadow-[4px_4px_0_0] flex items-center flex-wrap gap-4 text-black"
  >
    <RouterLink to="/" class="text-xl font-bold lg:inline-block hover:text-teal-500">
      Home
    </RouterLink>
    <RouterLink to="/about" class="text-xl font-bold lg:inline-block hover:text-teal-500">
      About
    </RouterLink>
  </nav>
</template>

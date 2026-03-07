<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">{{ msg }}</h1>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="text-2xl font-bold dark:text-white">{{ msg }}</h1>
</template>

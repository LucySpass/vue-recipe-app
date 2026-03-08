<script setup lang="ts">
import ErrorBadge from '@/components/ErrorBadge.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import { onMounted } from 'vue'
const store = useRecipeStore()

onMounted(() => {
  store.useGetRecipes()
})
</script>

<template>
  <p v-if="store.isLoading">Loading recipes...</p>

  <ErrorBadge v-else-if="store.error" :error="store.error" />

  <div v-if="store.recipes.length > 0" class="grid gap-2">
    <div v-for="recipe in store.recipes" :key="recipe.id">
      <RecipeCard :recipe="recipe" shortDescription></RecipeCard>
    </div>
  </div>

  <div v-else>
    <ErrorBadge error="No recipes found." />
  </div>
</template>

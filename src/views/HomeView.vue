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
      <RouterLink
        :to="`/recipe/${recipe.id}`"
        class="block rounded border-2 border-black bg-white p-4 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:ring-2 focus:ring-yellow-300 focus:outline-0 text-black"
      >
        <RecipeCard :recipe="recipe" shortDescription></RecipeCard>
      </RouterLink>
    </div>
  </div>

  <div v-else>
    <ErrorBadge error="No recipes found." />
  </div>
</template>

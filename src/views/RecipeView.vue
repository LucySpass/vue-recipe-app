<script setup lang="ts">
import ErrorBadge from '@/components/ErrorBadge.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import type { Recipe } from '@/types/Recipe'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useRecipeStore()

const recipe = ref<Recipe | null>(null)

onMounted(async () => {
  recipe.value = await store.useGetRecipeById(String(route.params.id))
})
</script>

<template>
  <div v-if="recipe">
    <h1>Recipe</h1>
    <RecipeCard :recipe="recipe"></RecipeCard>
  </div>
  <div v-else>
    <ErrorBadge error="Recipe not found"></ErrorBadge>
  </div>
</template>

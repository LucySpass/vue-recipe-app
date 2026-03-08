<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import ErrorBadge from '@/components/ErrorBadge.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipe'
import type { Recipe } from '@/types/Recipe'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useRecipeStore()

const recipe = ref<Recipe | null>(null)

onMounted(async () => {
  recipe.value = await store.useGetRecipeById(String(route.params.id))
})

function onEdit() {
  router.push(`/recipe/${recipe.value?.id}/edit`)
}

async function onDelete() {
  await store.useDeleteRecipe(recipe.value?.id ?? '0')
  router.push('/')
}
</script>

<template>
  <div v-if="recipe">
    <h1 class="text-xl">Recipe no {{ recipe.id }}</h1>
    <div class="flex gap-2 mt-4 mb-4">
      <ButtonComponent @click="onEdit">Edit</ButtonComponent>
      <ButtonComponent @click="onDelete">Delete</ButtonComponent>
    </div>
    <RecipeCard :recipe="recipe"></RecipeCard>
  </div>
  <div v-else>
    <ErrorBadge error="Recipe not found"></ErrorBadge>
  </div>
</template>

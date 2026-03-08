import { addRecipe, deleteRecipe, fetchRecipes, updateRecipe } from '@/services/recipeService'
import type { Recipe } from '@/types/Recipe'
import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'

const getError = (err: unknown, defaultMessage: string) =>
  err instanceof Error ? err.message : defaultMessage

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const useGetRecipes = async () => {
    isLoading.value = true
    error.value = null
    try {
      recipes.value = await fetchRecipes()
    } catch (err) {
      error.value = getError(err, 'Unknown error')
    } finally {
      isLoading.value = false
    }
  }

  const useAddRecipe = async (newRecipe: Recipe) => {
    try {
      const savedRecipe = await addRecipe(newRecipe)
      recipes.value.push(savedRecipe)
      return savedRecipe
    } catch (err) {
      error.value = getError(err, 'Failed to add')
      throw err
    }
  }

  const useUpdateRecipe = async (recipe: Recipe) => {
    try {
      const updated = await updateRecipe(recipe)
      const index = recipes.value.findIndex((r) => r.id === recipe.id)
      if (index !== -1) recipes.value[index] = updated
      return updated
    } catch (err) {
      error.value = getError(err, 'Failed to update')
      throw err
    }
  }

  const useDeleteRecipe = async (id: number) => {
    try {
      await deleteRecipe(id)
      recipes.value = recipes.value.filter((r) => r.id !== id)
    } catch (err) {
      error.value = getError(err, 'Failed to delete')
      throw err
    }
  }

  const useGetRecipeById = async (id: number): Promise<Recipe | null> => {
    if (!recipes.value.length) {
      await useGetRecipes()
    }

    console.log(
      'useGetRecipeById',
      toRaw(recipes.value),
      id,
      recipes.value.find((r) => r.id === id),
    )

    return recipes.value.find((r) => Number(r.id) === id) ?? null
  }

  return {
    recipes,
    isLoading,
    error,
    useGetRecipes,
    useAddRecipe,
    useUpdateRecipe,
    useDeleteRecipe,
    useGetRecipeById,
  }
})

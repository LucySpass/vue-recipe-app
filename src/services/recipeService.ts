import type { Recipe } from '@/types/Recipe'

const STORAGE_KEY = 'vue-recipe-app-recipes'

function loadRecipes(): Recipe[] {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return []
  try {
    return JSON.parse(data) as Recipe[]
  } catch {
    return []
  }
}

function saveRecipes(recipes: Recipe[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes))
}

export async function fetchRecipes(): Promise<Recipe[]> {
  return loadRecipes()
}

export async function addRecipe(recipe: Omit<Recipe, 'id'>): Promise<Recipe> {
  const recipes = loadRecipes()
  const newRecipe: Recipe = { ...recipe, id: crypto.randomUUID() }
  recipes.push(newRecipe)
  saveRecipes(recipes)
  return newRecipe
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
  const recipes = loadRecipes()
  const index = recipes.findIndex((r) => r.id === recipe.id)
  if (index === -1) throw new Error('Recipe not found')
  recipes[index] = recipe
  saveRecipes(recipes)
  return recipe
}

export async function deleteRecipe(id: string): Promise<void> {
  const recipes = loadRecipes()
  saveRecipes(recipes.filter((r) => r.id !== id))
}

import type { Recipe } from '@/types/Recipe'

const API_URL = 'http://localhost:3000/recipes'

export async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch(API_URL)
  if (!response.ok) throw new Error('Failed to fetch recipes')
  return response.json()
}

export async function addRecipe(recipe: Recipe): Promise<Recipe> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  })
  if (!response.ok) throw new Error('Failed to add recipe')
  return response.json()
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
  const response = await fetch(`${API_URL}/${recipe.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  })
  if (!response.ok) throw new Error('Failed to update recipe')
  return response.json()
}

export async function deleteRecipe(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
  if (!response.ok) throw new Error('Failed to delete recipe')
}

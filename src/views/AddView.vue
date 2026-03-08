<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import ErrorBadge from '@/components/ErrorBadge.vue'
import { useRecipeStore } from '@/stores/recipe'
import type { Recipe } from '@/types/Recipe'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useRecipeStore()

const initialState = {
  title: '',
  description: '',
  author: '',
  createdDate: new Date(),
  isFavorite: false,
}

const form = ref({ ...initialState })
const isSubmitting = ref(false)
const formError = ref<string | null>(null)

const handleSubmit = async () => {
  if (!form.value.title) {
    formError.value = 'Title is required'
    return
  }
  if (!form.value.description) {
    formError.value = 'Description is required'
    return
  }
  if (!form.value.author) {
    formError.value = 'Author is required'
    return
  }

  isSubmitting.value = true
  formError.value = null

  try {
    // Create recipe without id (server assigns it)
    const newRecipe: Omit<Recipe, 'id'> = {
      title: form.value.title,
      description: form.value.description,
      author: form.value.author,
      createdDate: form.value.createdDate ?? new Date(),
      isFavorite: form.value.isFavorite,
    }

    await store.useAddRecipe(newRecipe)

    // Redirect to home on success
    router.push('/')
  } catch (err) {
    formError.value = err instanceof Error ? err.message : 'Failed to add recipe'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.value = { ...initialState }
  formError.value = null
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1>Add New Recipe</h1>

    <div v-if="formError">
      <ErrorBadge :error="formError" />
    </div>

    <form @submit.prevent="handleSubmit" class="grid gap-4">
      <label for="title">
        <span>Title *</span>
        <input
          id="title"
          class="form-group"
          v-model.trim="form.title"
          type="text"
          placeholder="Enter recipe title"
          required
        />
      </label>

      <label for="description">
        <span>Description *</span>
        <textarea
          id="description"
          class="form-group"
          v-model.trim="form.description"
          placeholder="Enter recipe description"
          rows="5"
          required
        />
      </label>

      <label for="author">
        <span>Author *</span>
        <input
          id="author"
          class="form-group"
          v-model.trim="form.author"
          type="text"
          placeholder="Your name"
          required
        />
      </label>

      <label for="createdDate" class="w-xs">
        <span>Date</span>
        <input class="form-group" id="createdDate" v-model="form.createdDate" type="date" />
      </label>

      <label for="isFavorite" class="w-fit flex gap-2">
        <span>Mark as favorite</span>
        <input class="form-group" id="isFavorite" v-model="form.isFavorite" type="checkbox" />
      </label>

      <div class="flex gap-4">
        <ButtonComponent type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Adding...' : 'Add Recipe' }}
        </ButtonComponent>
        <ButtonComponent type="reset" @click="resetForm" :disabled="isSubmitting">
          Reset
        </ButtonComponent>
      </div>
    </form>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.form-group {
  @apply mt-0.5 w-full p-2 bg-white text-black border-2 border-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300;
}
</style>

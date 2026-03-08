<script setup lang="ts">
import type { Recipe } from '@/types/Recipe'

const props = defineProps<{
  recipe: Recipe
  shortDescription?: boolean
}>()

const { createdDate, title, description, isFavorite } = props.recipe
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="inline-flex items-center gap-1.5 justify-between">
      <div class="inline-flex items-center gap-1.5">
        <svg
          aria-label="Calendar icon"
          viewBox="0 0 24 24"
          tabindex="-1"
          fill="currentColor"
          class="-ms-1 me-1.5 size-4"
        >
          <path
            d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"
          ></path>
        </svg>

        <time
          :datetime="new Date(createdDate).toISOString()"
          class="text-xs/none font-semibold uppercase"
        >
          {{ new Date(createdDate).toLocaleDateString('en-US') }}
        </time>
      </div>

      <div v-if="isFavorite">
        <svg
          viewBox="0 0 24 24"
          tabindex="-1"
          aria-label="StarRate Icon"
          fill="currentColor"
          class="-ms-1 me-1.5 size-6 text-fuchsia-500"
        >
          <path
            d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"
          ></path>
        </svg>
      </div>

      <div v-else>
        <svg
          viewBox="0 0 24 24"
          tabindex="-1"
          aria-label="StarOutline Icon"
          fill="currentColor"
          class="-ms-1 me-1.5 size-6 text-fuchsia-500"
        >
          <path
            d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"
          ></path>
        </svg>
      </div>
    </div>

    <h3 class="text-xl font-semibold">
      {{ title }}
    </h3>

    <p :class="[shortDescription && 'line-clamp-2']">
      {{ description }}
    </p>
  </div>
</template>

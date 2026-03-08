<script setup lang="ts">
import type { Recipe } from '@/types/Recipe'

const props = defineProps<{
  recipe: Recipe
  shortDescription?: boolean
}>()

const { createdDate, title, description } = props.recipe
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="inline-flex items-center gap-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-4"
      >
        <path
          fill-rule="evenodd"
          d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <time
        :datetime="new Date(createdDate).toISOString()"
        class="text-xs/none font-semibold uppercase"
      >
        {{ new Date(createdDate).toLocaleDateString('en-US') }}
      </time>
    </span>

    <h3 class="text-xl font-semibold">
      {{ title }}
    </h3>

    <p :class="[shortDescription && 'line-clamp-2', 'text-pretty']">
      {{ description }}
    </p>
  </div>
</template>

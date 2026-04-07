<template>
  <div class="flex flex-col gap-6">
    <div class="border-2 border-black bg-white text-black p-6 shadow-[4px_4px_0_0]">
      <h1 class="text-2xl font-bold mb-3">Ivana Begovic</h1>
      <p class="text-sm font-semibold uppercase tracking-wide mb-4">Full-Stack Software Engineer</p>
      <p class="text-pretty leading-relaxed">
        Software engineer with 9+ years of experience building web applications across the full
        stack. I've worked extensively with React and Angular on the frontend, and I'm currently
        expanding into backend development. I am exploring Ruby on Rails, databases, API design,
        Flutter, Vue 3.
      </p>

      <div class="flex gap-3 mt-6">
        <a
          href="https://github.com/LucySpass"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0_0] hover:bg-yellow-300 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ivana-begovic/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0_0] hover:bg-yellow-300 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>

    <div class="border-2 border-black bg-yellow-100 text-black p-6 shadow-[4px_4px_0_0]">
      <h2 class="text-xl font-bold mb-3">About this project</h2>
      <p class="text-pretty leading-relaxed mb-4">
        This recipe app is my introduction to Vue 3. It covers the core of the framework —
        Composition API, Pinia for state management, Vue Router for navigation, and Tailwind CSS for
        styling. Recipes are stored in
        <code class="font-mono text-sm bg-white border border-black px-1">localStorage</code> so the
        app runs fully in the browser with no backend required.
      </p>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="tech in stack"
          :key="tech"
          class="border-2 border-black bg-white px-3 py-1 text-sm font-semibold shadow-[2px_2px_0_0]"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const stack = ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'Tailwind CSS v4', 'Vite']
</script>

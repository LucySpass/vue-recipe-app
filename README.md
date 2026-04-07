# Vue Recipe App

A recipe management app built to learn **Vue 3** with the Composition API. Recipes are stored in `localStorage` so the app works fully in the browser with no backend required.

---

## Features

- Browse a list of recipes on the home page
- View full recipe details
- Add new recipes via a form
- Edit existing recipes
- Delete recipes
- Mark recipes as favorites (shown with a star icon)
- Data persists in the browser via `localStorage`

## Tech stack

| Tool                    | Purpose             |
| ----------------------- | ------------------- |
| Vue 3 (Composition API) | UI framework        |
| TypeScript              | Type safety         |
| Pinia                   | State management    |
| Vue Router              | Client-side routing |
| Tailwind CSS v4         | Styling             |
| Vite                    | Build tool          |

## Project structure

```
src/
├── assets/        # Global CSS (Tailwind)
├── components/    # Reusable UI components (RecipeCard, HeaderNavigation, …)
├── router/        # Vue Router configuration
├── services/      # localStorage read/write logic (recipeService.ts)
├── stores/        # Pinia store (recipe.ts)
├── types/         # TypeScript interfaces (Recipe.ts)
└── views/         # Page-level components (HomeView, RecipeView, AddView, …)
```

## Local development

```sh
npm install
npm run dev
```

### Build for production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

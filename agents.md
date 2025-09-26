# MG_SHOP Frontend - Guide pour Agents IA

## Stack Technique

- **Framework**: Nuxt 4 (Vue 3 + TypeScript)
- **UI Library**: TailwindCSS
- **Package Manager**: pnpm

## Particularités Nuxt 4

### Auto-imports

- **Vue**: `ref`, `computed`, `watch`, etc.
- **Composables**: `useState`, `useRouter`, `useFetch`, etc.
- **Composants**: Auto-importés depuis `components/`
- **Stores**: `usePinia`, `defineStore`, `storeToRefs`, `acceptHMRUpdate`, `use*Store` depuis `stores/` sont auto-importés
- **Utils**: Fonctions depuis `utils/` sont auto-importées

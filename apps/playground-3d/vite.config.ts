import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  base: '/fibbo/playground-3d/',
  build: {
    rollupOptions: {
      // Solution found here: https://github.com/dimforge/rapier.js/issues/278
      // Without this option, treeshaking seems to ditch required code from Rapier
      // Basically results in : "TypeError: Cannot read properties of undefined (reading 'rawintegrationparameters_new')"
      treeshake: false,
    },
  },
  define: {
    // Enable hydration mismatch details in production build
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    // Enable Vue Option API
    __VUE_OPTIONS_API__: false,
    // Enable Vue Devtools
    __VUE_PROD_DEVTOOLS__: false,
  },
})

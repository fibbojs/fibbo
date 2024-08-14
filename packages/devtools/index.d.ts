/**
 * For some reason, this is required for typedoc to work.
 * I don't know why, but it doesn't work without it.
 */
declare module '*.ce.vue' {
  import type { defineComponent } from 'vue'

  const component: ReturnType<typeof defineComponent>
  export default component
}

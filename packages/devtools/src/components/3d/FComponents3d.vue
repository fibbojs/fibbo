<template>
  <div class="f-components">
    <FComponentDom
      v-for="component in components"
      :key="component.__ID__"
      :component="component"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent } from '@fibbojs/3d'
import FComponentDom from './FComponent3d.vue'

defineProps({
  components: {
    type: Array as PropType<FComponent[]>,
    default: () => [],
  },
})
</script>

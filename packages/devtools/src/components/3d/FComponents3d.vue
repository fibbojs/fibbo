<template>
  <div class="f-components">
    <FComponent3dDom
      v-for="component in components"
      :key="component.__ID__"
      :component="component"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent3d } from '@fibbojs/3d'
import FComponent3dDom from './FComponent3d.vue'

defineProps({
  components: {
    type: Array as PropType<FComponent3d[]>,
    default: () => [],
  },
})
</script>

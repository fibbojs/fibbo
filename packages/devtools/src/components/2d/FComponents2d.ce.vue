<template>
  <div class="f-components">
    <FComponent2dDom
      v-for="component in components"
      :key="component.__ID__"
      :component="component"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent2d } from '@fibbojs/2d';
import FComponent2dDom from './FComponent2d.ce.vue';

defineProps({
  components: {
    type: Array as PropType<FComponent2d[]>,
    default: () => []
  }
})
</script>

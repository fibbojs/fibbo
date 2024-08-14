<template>
  <div class="f-component f-component-2d">
    <!-- @vue-skip -->
    <h4 class="f-component-id">
      {{ component.constructor.name }} ({{ component.__ID__ }})
    </h4>
    <div class="f-component-property">
      <div class="f-component-property-group">
        <p>Position</p>
        <p>x : {{ component.position.x }}</p>
        <p>y : {{ component.position.y }}</p>
      </div>
      <p>r : {{ component.rotation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent2d } from '@fibbojs/2d'

defineProps({
  component: {
    type: Object as PropType<FComponent2d>,
    required: true,
  },
})
</script>

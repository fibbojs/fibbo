<template>
  <div class="f-component f-component-3d">
    <!-- @vue-skip -->
    <h4 class="f-component-id">{{ component.constructor.name }} ({{ component.__ID__ }})</h4>
    <div class="f-component-property">
      <div class="f-component-property-group">
        <p>Position</p>
        <p>x : {{ component.position.x }}</p>
        <p>y : {{ component.position.y }}</p>
        <p>z : {{ component.position.z }}</p>
      </div>
      <div class="f-component-property-group">
        <p>Rotation</p>
        <p>x : {{ component.rotation.x }}</p>
        <p>y : {{ component.rotation.y }}</p>
        <p>z : {{ component.rotation.z }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent3d } from '@fibbojs/3d';

defineProps({
  component: {
    type: Object as PropType<FComponent3d>,
    required: true
  }
})
</script>

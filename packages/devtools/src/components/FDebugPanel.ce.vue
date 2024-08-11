<template>
  <div class="f-debug-panel">
    <h1>{{ title }}</h1>
    <div v-if="scene">
      <div v-for="component in scene.components" :key="component.ID">
        <!-- @vue-skip -->
        <p>{{ component.ID }} : {{ component.position.x }} - {{ component.position.y }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FScene } from '@fibbojs/core'

defineProps({
  title: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null
  }
})
</script>

<style scoped>
  .f-debug-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    width: 300px;
    background: #0000009f;
    border-radius: 8px;
  }

  h1 {
    color: red;
  }
</style>

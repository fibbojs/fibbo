<template>
  <div class="f-debug-panel">
    <h1>{{ title }}</h1>
    <div v-if="scene">
      <FDebugPanel2d
        v-if="is2dComponent(scene.components[0])"
        :components="scene.components as FComponent2d[]"
      />
      <FDebugPanel3d
        v-if="is3dComponent(scene.components[0])"
        :components="scene.components as FComponent3d[]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent, FScene } from '@fibbojs/core'
import type { FComponent2d } from '@fibbojs/2d'
import type { FComponent3d } from '@fibbojs/3d'
import FDebugPanel2d from './FDebugPanel2d.vue'
import FDebugPanel3d from './FDebugPanel3d.vue'

// Explore prototype chain of given FComponent to get all the classes in the chain
function getPrototypeChain(component: FComponent) {
  let proto = component;
  const names = [];
  while (proto) {
    names.push(proto.constructor.name);
    proto = Object.getPrototypeOf(proto);
  }
  return names;
}

// Tell if a given FComponent is an instance of FComponent2d
function is2dComponent(component: FComponent) {
  return getPrototypeChain(component).includes('FComponent2d');
}

// Tell if a given FComponent is an instance of FComponent3d
function is3dComponent(component: FComponent) {
  return getPrototypeChain(component).includes('FComponent3d');
}

defineProps({
  title: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null
  }
})
</script>

<style scoped>
.f-component-id {
  color: #fff;
  margin: 0;
}

.f-debug-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  width: 300px;
  background: #0000009f;
  border-radius: 8px;
  overflow: auto;
}

.f-debug-properties--hidden {
  display: none;
}

h1 {
  color: red;
}

.f-debug-properties {
  padding: 10px;
  border-bottom: 1px solid #fff;
}

.f-debug-property {
  display: flex;
  justify-content: space-between;
}

.f-debug-property p {
  margin: 0;
  color: #fff;
}
</style>

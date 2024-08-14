<template>
  <div class="f-debug-panel">
    <h1>{{ title }}</h1>
    <div v-if="scene">
      <FComponents2d
        v-if="is2dComponent(scene.components[0])"
        :components="scene.components as FComponent2d[]"
      />
      <FComponents3d
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
import FComponents2d from './2d/FComponents2d.ce.vue'
import FComponents3d from './3d/FComponents3d.ce.vue'

/**
 * Explore prototype chain of given FComponent to get all the classes in the chain.
 * For some reason, `instanceof` doesn't work in this context, so we have to do this.
 */
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

<style lang="scss" scoped>
.f-debug-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  width: 300px;
  background: #171518;
  border-radius: 8px;
  overflow: auto;
  padding: 10px;

  * {
    color: #c2c1c3;
  }

  h1 {
    margin: 0 0 10px;
  }

  .f-components {
    margin: 10px;
  }
}
</style>

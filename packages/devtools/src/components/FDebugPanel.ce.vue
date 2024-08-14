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
import type { FScene } from '@fibbojs/core'
import type { FComponent2d } from '@fibbojs/2d'
import type { FComponent3d } from '@fibbojs/3d'
import { is2dComponent } from '../utils/is2dComponent'
import { is3dComponent } from '../utils/is3dComponent'
import FComponents2d from './2d/FComponents2d.vue'
import FComponents3d from './3d/FComponents3d.vue'

defineProps({
  title: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null,
  },
})
</script>

<style lang="scss" scoped>
.f-debug-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  width: 300px;
  background: #151617;
  border-radius: 8px;
  overflow: auto;
  padding: 10px;

  * {
    color: #BFC0C1;
  }

  h1 {
    margin: 0 0 10px;
  }

  .f-components {
    margin: 10px;
  }
}
</style>

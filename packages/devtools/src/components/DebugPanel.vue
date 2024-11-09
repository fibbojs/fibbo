<template>
  <div class="f-debug-panel">
    <h1>{{ title }}</h1>
    <div v-if="scene.components.length > 0">
      <FComponents2d
        v-if="scene.components[0].__IS_2D__"
        :components="scene.components as FComponent2d[]"
      />
      <FComponents3d
        v-if="scene.components[0].__IS_3D__"
        :components="scene.components as FComponent3d[]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FScene } from '@fibbojs/core'
import type { FComponent as FComponent2d } from '@fibbojs/2d'
import type { FComponent as FComponent3d } from '@fibbojs/3d'
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

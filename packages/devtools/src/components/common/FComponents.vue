<template>
  <template v-if="scene.components.length > 0">
    <FComponents2d
      v-if="scene.components[0].__IS_2D__"
      :components="scene.components as FComponent2d[]"
    />
    <FComponents3d
      v-if="scene.components[0].__IS_3D__"
      :components="scene.components as FComponent3d[]"
    />
  </template>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FScene } from '@fibbojs/core'
import type { FComponent as FComponent2d } from '@fibbojs/2d'
import type { FComponent as FComponent3d } from '@fibbojs/3d'
import FComponents2d from '../2d/FComponents2d.vue'
import FComponents3d from '../3d/FComponents3d.vue'

defineProps({
  title: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null,
  },
})
</script>

<style lang="scss">
.f-components {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 8px;
  row-gap: 2px;
}

.f-component {
  .f-component-properties {
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
    }

    .f-component-property {
      margin-left: 24px;

      .f-component-property-group {
        display: flex;
        flex-direction: row;
        column-gap: 2px;

        > p {
          padding: 0 4px;
        }
        > input {
          padding: 0 4px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.4);
          border: none;
          width: 32px;

          // Hide arrows
          &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          // Hide focus
          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  .f-component-properties--hidden {
    display: none;
  }
}
</style>

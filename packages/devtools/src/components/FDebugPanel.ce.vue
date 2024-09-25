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

<style lang="scss">
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
    display: flex;
    flex-direction: column;
    margin: 8px;
    row-gap: 2px;
  }

  .f-component {
    .f-component-header {
      display: flex;
      flex-direction: row;
      column-gap: 8px;
      align-items: center;
      border-radius: 8px;
      transition: background 0.1s;
      cursor: pointer;

      .f-component-header-arrow {
        display: grid;
        place-items: center;
        width: 16px;
        transition: transform 0.1s;
      }

      .f-component-name {
        margin: 0;
      }

      .f-component-id {
        color: #4d4e4e;
      }

      &:hover {
        background: #1E1F20;
      }
    }

    .f-component-header--open {
      .f-component-header-arrow {
        transform: rotate(90deg);
      }
    }

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
            background: #1E1F20;
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

  .f-component-icon {
    width: 16px;
    height: 16px;
    display: grid;
    place-items: center;
  }
}
</style>

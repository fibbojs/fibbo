<template>
  <div class="f-debug-panel">
    <h1>{{ title }}</h1>
    <Tabs :tabs="['Components', 'Settings']">
      <template #Components>
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
      </template>
      <template #Settings>
        <div>Settings</div>
      </template>
    </Tabs>
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
import Tabs from './common/Tabs.vue'

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
  position: fixed;
  top: 10px;
  left: -100%;
  bottom: 10px;
  width: 300px;
  background: #151617;
  border-radius: 8px;
  overflow: auto;
  padding: 10px;
  transition: all 0.2s ease;
  transform: scale(0.6);
  font-size: 14px;

  &.visible {
    left: 25px;
    transform: scale(1.0);
  }

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
}

/* Gets applied if supported only */
@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  .f-debug-panel {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .f-component {
    .f-component-properties {
      .f-component-property {
        .f-component-property-group {
          > input {
            background: rgba(0, 0, 0, 0.4) !important;
          }
        }
      }
    }
  }
}
</style>

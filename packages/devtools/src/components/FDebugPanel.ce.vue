<template>
  <div class="f-debug">
    <DebugPanel
      :class="{
        visible: panelVisible,
      }"
      :title="props.title"
      :scene="props.scene"
    />
    <ToggleButton
      :class="{
        visible: panelVisible,
      }"
      @click="toggleVisible"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'
import type { FScene } from '@fibbojs/core'
import DebugPanel from './DebugPanel.vue'
import ToggleButton from './ToggleButton.vue'

const props = defineProps({
  title: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null,
  },
})

const panelVisible = ref(false)

function toggleVisible() {
  panelVisible.value = !panelVisible.value
}
</script>

<style lang="scss">
@keyframes animSvgIn {
  from {
    opacity: 0%;
    transform: scale(0.9);
  }

  to {
    opacity: 100%;
    transform: scale(1.0);
  }
}

#toggle-button {
  background-color: #151617;
  height: 40px;
  width: 40px;
  position: fixed;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  border-radius: 100%;
  transition: all 0.2s ease;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;

    #fibbo-logo {
      path {
        stroke: white;
      }
    }
  }

  svg {
    width: 24px;
    height: 24px;
    animation-name: animSvgIn;
    animation-duration: 0.2s;

    path {
      transition: all 0.2s ease;
    }
  }

  #fibbo-logo {
    display: block;
    path {
      stroke: rgb(147, 147, 147);
      stroke-width: 20;
    }
  }
  #close-cross {
    display: none;
    width: 18px;
    height: 18px;
  }

  &.visible {
    #fibbo-logo {
      display: none;
    }
    #close-cross {
      display: block;
    }
  }
}

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

  &.visible {
    left: 25px;
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

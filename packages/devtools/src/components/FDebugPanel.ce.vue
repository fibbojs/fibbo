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
  background: #151617;
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

  .f-debug-tabs__header {
    position: relative;
    background: #101212;
    display: flex;
    flex-direction: row;
    padding: 6px;
    column-gap: 6px;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, 1fr);
    border-radius: 12px;

    .f-debug-tabs__tab {
      display: grid;
      place-content: center;
      width: 100%;
      padding: 6px;
      border-radius: 6px;
      transition: background 0.1s;
      cursor: pointer;
      z-index: 1;
    }

    .f-debug-tabs__selector {
      position: absolute;
      top: 6px;
      bottom: 6px;
      width: 50%;
      background: #1E1F20;
      border-radius: 6px;
      transition: left 0.2s ease;
    }
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
      height: 18px;
      padding: 4px;

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

/* Gets applied if supported only */
@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  #toggle-button {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .f-debug-panel {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .f-debug-tabs__header {
    background: rgba(0, 0, 0, 0.7) !important;

    .f-debug-tabs__selector {
      background: rgba(70, 70, 70, 0.2) !important;
    }
  }

  .f-component {
    .f-component-header {
      &:hover {
        background: rgba(0, 0, 0, 0.4) !important;
      }
    }

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

<template>
  <div class="f-debug-panel" :class="{ glassmorphism }">
    <header>
      <a href="https://fibbo.dev" target="_blank" rel="noopener noreferrer">
        <FLogoFibbo />
      </a>
      <span>Fibbo Devtools (v{{ version }})</span>
    </header>
    <Tabs :tabs="['Components', 'Console', 'Settings']">
      <template #ComponentsIcon>
        <FIconComponent />
      </template>
      <template #Components>
        <FComponents :scene="scene" />
      </template>
      <template #ConsoleIcon>
        <FIconConsole />
      </template>
      <template #Console>
        <Console />
      </template>
      <template #SettingsIcon>
        <FIconSettings />
      </template>
      <template #Settings>
        <Settings />
      </template>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'
import type { FScene } from '@fibbojs/core'
import { State } from '../../State'
import FLogoFibbo from '../icons/FLogoFibbo.vue'
import FIconComponent from '../icons/FIconComponent.vue'
import FIconSettings from '../icons/FIconSettings.vue'
import FIconConsole from '../icons/FIconConsole.vue'
import Tabs from './Tabs.vue'
import FComponents from './FComponents.vue'
import Settings from './Settings.vue'
import Console from './Console.vue'

defineProps({
  title: String,
  version: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null,
  },
})

const glassmorphism = ref(State.glassmorphism)

State.onGlassmorphismChange((value) => {
  glassmorphism.value = value
})
</script>

<style lang="scss">
.f-debug-panel {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10px;
  left: -100%;
  bottom: 10px;
  width: 300px;
  background: #151617;
  border-radius: 8px;
  padding: 10px;
  transition: all 0.15s ease;
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
    flex: 0 1 auto;
    margin: 0 0 10px;
  }

  > * {
    flex: 1 1 auto;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 48px;
    column-gap: 8px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fibbo-logo {
      width: 24px;
      height: 24px;

      path {
        stroke: rgb(147, 147, 147);
      }
    }
  }
}

/* Gets applied if supported only */
@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  .f-debug-panel.glassmorphism {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
</style>
q

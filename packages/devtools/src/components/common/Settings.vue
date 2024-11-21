<template>
  <div class="f-debug-settings">
    <Setting
      id="hitbox"
      v-model:value="settingHitboxes"
      title="Debug hitboxes"
      tooltip="Display rigidbodies, colliders and sensors with colored lines."
    />
    <Setting
      id="helpers"
      v-model:value="settingHelpers"
      title="Helpers"
      tooltip="Display a grid, axis and light helpers."
    />
    <Setting
      id="devtools-glassmorphism"
      v-model:value="settingGlassmorphism"
      title="Glassmorphism"
      tooltip="Enable fancy glassmorphism effect on the devtools panel."
    />
    <Setting
      id="devtools-component-round-transform"
      v-model:value="settingComponentRoundTransform"
      title="Round component transforms"
      tooltip="Round the transform values to 2 decimal places in the component inspector."
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { State } from '../../State'
import Setting from './Setting.vue'

const settingHitboxes = ref(State.hitboxes)
const settingHelpers = ref(State.helpers)
const settingGlassmorphism = ref(State.glassmorphism)
const settingComponentRoundTransform = ref(State.componentRoundTransform)

watch(settingHitboxes, (value) => {
  State.hitboxes = value
})
watch(settingHelpers, (value) => {
  State.helpers = value
})
watch(settingGlassmorphism, (value) => {
  State.glassmorphism = value
})
watch(settingComponentRoundTransform, (value) => {
  State.componentRoundTransform = value
})
</script>

<style scoped lang="scss">
.f-debug-settings {
  display: flex;
  flex-direction: column;
  margin: 8px;
  row-gap: 2px;

  .f-debug-setting {
    display: flex;
    flex-direction: row;
    height: 28px;
    column-gap: 8px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

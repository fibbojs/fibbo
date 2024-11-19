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
import DebugPanel from './common/DebugPanel.vue'
import ToggleButton from './common/ToggleButton.vue'

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

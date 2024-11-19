<template>
  <div
    class="tooltip-wrapper"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onMouseMove"
  >
    <div
      class="tooltip"
      :style="{ top: `${position.y}px`, left: `${position.x}px`, opacity: visible ? 1 : 0 }"
    >
      {{ content }}
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps({
  content: {
    type: String,
    required: true,
  },
})

const visible = ref(false)
const position = ref({ x: 0, y: 0 })

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    visible.value = false
  }
}

function onMouseEnter() {
  visible.value = true
}

function onMouseLeave() {
  visible.value = false
}

function onMouseMove(event: MouseEvent) {
  position.value = {
    x: event.clientX - 10,
    y: event.clientY - 10,
  }
}
</script>

<style scoped lang="scss">
.tooltip-wrapper {
  .tooltip {
    position: fixed;
    z-index: 1000;
    background: #000000;
    color: #FFFFFF;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    transition: opacity 0.1s ease;
  }
}
</style>

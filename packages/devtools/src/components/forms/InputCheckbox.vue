<!-- Custom input:checkbox vue component -->
<template>
  <label class="switch" :for="id">
    <div class="slider" :class="{ checked: value }">
      <span class="slider-toggle" />
    </div>
    <input
      :id="id"
      :checked="value"
      type="checkbox"
      @change="updateValue"
    >
  </label>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'

defineProps({
  id: {
    type: String,
    required: false,
    default: Math.random().toString(36).substring(7),
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:value',
])

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:value', target.checked)
}
</script>

<style scoped lang="scss">
.switch {
  height: 24px;
  width: 40px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    display: flex;
    position: relative;
    height: 24px;
    width: 40px;
    background: #1E1F20;
    transition: all 0.2s ease;
    border-radius: 8px;

    .slider-toggle {
      display: flex;
      position: absolute;
      top: 4px;
      bottom: 4px;
      left: 4px;
      width: 16px;
      background: #FFFFFF;
      transition: all 0.2s ease;
      border-radius: 4px;
    }
  }

  .checked {
    background: #B978ED !important;

    .slider-toggle {
      left: calc(100% - 20px);
    }
  }
}

@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  .switch .slider {
    background: rgba(0, 0, 0, 0.7);
  }
}
</style>

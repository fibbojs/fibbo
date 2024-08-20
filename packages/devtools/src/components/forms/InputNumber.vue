<!-- Custom input:number vue component -->
<template>
  <input
    :value="cropValue(value)"
    type="number"
    @input="updateValue"
  >
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { cropValue } from '../../utils/cropValue'

defineProps({
  value: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits([
  'update:value',
])

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:value', Number(target.value))
}
</script>

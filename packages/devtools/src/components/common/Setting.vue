<template>
  <Tooltip v-if="tooltip" :content="tooltip">
    <label class="setting" :for="id">
      <label :for="id">{{ title }}</label>
      <InputCheckbox :id="id" :title="title" :value="valueTemp" @update:value="updateValue" />
    </label>
  </Tooltip>
  <label v-else class="setting" :for="id">
    <label :for="id">{{ title }}</label>
    <InputCheckbox :id="id" :title="title" :value="valueTemp" @update:value="updateValue" />
  </label>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue'
import InputCheckbox from '../forms/InputCheckbox.vue'
import Tooltip from './Tooltip.vue'

const props = defineProps({
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
  tooltip: {
    type: String,
    required: false,
  },
})

/**
 * This is a workaround to avoid reactivity issues with the v-model
 */
const emit = defineEmits([
  'update:value',
])
const valueTemp = ref(props.value)
watch(props, () => {
  valueTemp.value = props.value
})
function updateValue(newValue: boolean) {
  emit('update:value', newValue)
}
</script>

<style scoped lang="scss">
.setting {
  display: flex;
  flex-direction: row;
  height: 36px;
  align-items: center;
  justify-content: space-between;
}
</style>

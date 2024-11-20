<template>
  <div class="json-tree">
    <div v-for="(value, key) in data" :key="key" class="json-item">
      <span class="key">{{ key }}: </span>
      <span
        v-if="isObject(value) && value !== null"
        class="toggle"
        @click="toggleExpanded(key)"
      >
        <span :class="{ expanded: expandedKeys.includes(key) }">
          {{ expandedKeys.includes(key) ? '−' : '+' }}
        </span>
      </span>
      <span v-else class="value">{{ formatValue(value) }}</span>
      <div
        v-if="expandedKeys.includes(key) && isObject(value) && value !== null"
        class="children"
      >
        <ConsoleJson :data="value" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  data: Record<string, any>
}>()

const expandedKeys = ref<string[]>([])

function isObject(value: any): value is object {
  return typeof value === 'object' && value !== null
}

function toggleExpanded(key: string) {
  const index = expandedKeys.value.indexOf(key)
  if (index > -1) {
    expandedKeys.value.splice(index, 1)
  }
  else {
    expandedKeys.value.push(key)
  }
}

function formatValue(value: any) {
  if (typeof value === 'string') {
    return `"${value}"`
  }
  return value
}
</script>

<style lang="scss" scoped>
.json-tree {
  white-space: pre-wrap;
}

.json-item {
  margin-left: 8px;
}

.key {
  font-weight: bold;
}

.toggle {
  cursor: pointer;

  span {
    user-select: none;
    font-size: 1.2em;
    transform: rotate(0deg);
    transition: transform 0.2s ease;

    &.expanded {
      transform: rotate(90deg);
    }
  }
}

.children {
  margin-left: 8px;
}
</style>

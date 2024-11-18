<template>
  <div class="f-debug-tabs">
    <div class="f-debug-tabs__header">
      <div
        v-for="tab in tabs"
        :key="tab"
        class="f-debug-tabs__tab"
        :class="{
          active: tab === selectedTabId,
        }"
        @click="selectTab(tab)"
      >
        {{ tab }}
      </div>
      <div ref="selector" class="f-debug-tabs__selector" />
    </div>
    <div class="f-debug-tabs__content">
      <slot :name="selectedTabId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as PropType<string[]>,
    required: true,
  },
})

const selectedTabId = ref(props.tabs[0])

const selector = ref<HTMLElement | null>(null)

function selectTab(id: string) {
  selectedTabId.value = id
  if (selector.value) {
    const tabs = selector.value.parentElement?.querySelectorAll('.f-debug-tabs__tab')
    if (tabs) {
      const tab = tabs[props.tabs.indexOf(id)] as HTMLElement
      selector.value.style.left = `${tab.offsetLeft}px`
    }
  }
}

onMounted(() => {
  if (selector.value) {
    const tabs = selector.value.parentElement?.querySelectorAll('.f-debug-tabs__tab')
    if (tabs) {
      const tab = tabs[0] as HTMLElement
      selector.value.style.width = `${tab.offsetWidth}px`
      selector.value.style.left = `${tab.offsetLeft}px`
    }
  }
})
</script>

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
    selector.value.style.width = `calc(${100 / props.tabs.length}% - 12px)`
    selector.value.style.left = `calc(${props.tabs.indexOf(id) * (100 / props.tabs.length)}% + 6px)`
  }
}

onMounted(() => {
  if (selector.value) {
    selector.value.style.width = `calc(${100 / props.tabs.length}% - 12px)`
    selector.value.style.left = `calc(${props.tabs.indexOf(selectedTabId.value) * (100 / props.tabs.length)}% + 6px)`
  }
})
</script>

<style scoped lang="scss">
.f-debug-tabs {
  display: flex;
  flex-direction: column;
  height: 500px;

  .f-debug-tabs__header {
    flex: 0 1 auto;
    position: relative;
    background: rgba(0, 0, 0, 0.7);
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
      background: rgba(70, 70, 70, 0.2);
      border-radius: 6px;
      transition: left 0.2s ease;
    }
  }

  .f-debug-tabs__content {
    flex: 1 1 auto;
    position: relative;
    overflow: auto;
  }
}
</style>

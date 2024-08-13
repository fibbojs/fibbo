<template>
  <div class="f-debug-panel-2d">
    <div v-for="component in components" :key="component.__ID__">
      <h3 class="f-component-id">{{ component.__ID__ }}</h3>
      <div class="f-debug-property">
        <div class="f-debug-property-group">
          <h4>Position</h4>
          <p>x : {{ component.position.x }}</p>
          <p>y : {{ component.position.y }}</p>
        </div>
        <p>r : {{ component.rotation }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent2d } from '@fibbojs/2d';

defineProps({
  components: {
    type: Array as PropType<FComponent2d[]>,
    default: () => []
  }
})
</script>

<style scoped>
.f-component-id {
  color: #fff;
  margin: 0;
}

.f-debug-properties {
  padding: 10px;
  border-bottom: 1px solid #fff;
}

.f-debug-property {
  display: flex;
  justify-content: space-between;
}

.f-debug-property p {
  margin: 0;
  color: #fff;
}
</style>

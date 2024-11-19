<template>
  <div class="f-debug-settings">
    <Setting
      id="setting-1"
      v-model:value="setting1"
      title="Setting 1"
      tooltip="Setting 1 is very useful trust me"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Setting from './Setting.vue'

const setting1 = ref(false)

watch(setting1, (value) => {
  console.log('Setting 1:', value)
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

<template>
  <div class="f-debug-console">
    <div
      v-for="log in logs" :key="log.id" :class="{
        'warn': log.type === 'warn',
        'error': log.type === 'error',
        'show-details': log.showDetails,
      }" class="f-debug-console__log"
    >
      <div class="f-debug-console__log-content" @click="log.showDetails = !log.showDetails">
        {{ log.content.join(' ') }}
      </div>
      <div v-if="log.showDetails" class="f-debug-console__log-details">
        <ConsoleJson :data="log.content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Log } from '../../FLogger'
import { FLogger } from '../../FLogger'
import ConsoleJson from './ConsoleJson.vue'

const logs = ref<Log[]>([])

FLogger.onLog((log) => {
  logs.value.push(log)
})

onMounted(() => {
  logs.value = [...logs.value, ...FLogger.getLogs()]
  // Hide details by default
  logs.value.forEach(log => log.showDetails = false)
})
</script>

<style scoped lang="scss">
.f-debug-console {
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  .f-debug-console__log {
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 2px;
    border-radius: 4px;
    transition: all 0.15s ease;

    &.warn > .f-debug-console__log-content {
      color: #ff9800;
    }

    &.error > .f-debug-console__log-content {
      color: #f44336;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }

    .f-debug-console__log-details {
      margin-top: 4px;
      padding: 8px;
      border-radius: 2px;

      pre {
        white-space: break-spaces;
      }
    }
  }
}
</style>

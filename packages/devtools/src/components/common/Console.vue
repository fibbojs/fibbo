<template>
  <div class="f-debug-console">
    <div v-for="log in logs" :key="log.id" :class="log.type" class="f-debug-console__log">
      <span>{{ log.content.join(' ') }}</span>
      <button @click="log.showDetails = !log.showDetails">
        Details
      </button>
      <div v-if="log.showDetails" class="object-details">
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
  padding: 10px;
  border-radius: 4px;

  .f-debug-console__log {
    position: relative;

    &.warn > span {
      color: #ff9800;
    }

    &.error > span {
      color: #f44336;
    }

    button {
      opacity: 0;
      position: absolute;
      top: 0px;
      right: 4px;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 2px 4px;
      transition: opacity 0.1s;

      &:active {
        border: none;
        outline: none;
      }
    }

    .object-details {
      margin-top: 4px;
      padding: 8px;
      border-radius: 2px;

      pre {
        white-space: break-spaces;
      }
    }

    &:hover {
      button {
        opacity: 1;
      }
    }
  }
}
</style>

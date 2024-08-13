<template>
  <div class="f-debug-panel">
    <h1>{{ title }}</h1>
    <div v-if="scene">
      <div v-for="component in scene.components" :key="component.__ID__">
        <h3 class="f-component-id">{{ component.__ID__ }}</h3>
        <div
        class="f-debug-properties"
        :class="{
          'f-debug-properties--hidden': property.shown === false
        }"
        v-for="property in properties"
        :key="property.label"
        >
          <div class="f-debug-property" v-if="property.shown && !property.isNested">
            <p>{{ property.label }}</p>
            <!-- @vue-skip -->
            <p>{{ String(component[property.label]).slice(0, 5) }}</p>
          </div>
          <div class="f-debug-property" v-if="property.isNested && property.properties">
            <div class="f-debug-sub-property" v-for="subProperty in property.properties" :key="subProperty.label">
              <div class="f-debug-property" v-if="subProperty.shown">
                <p>{{ subProperty.label }}</p>
                <!-- @vue-skip -->
                <p>{{ String(component[property.label][subProperty.label]).slice(0, 5) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType, Ref } from 'vue'
import { defineProps, onMounted, ref } from 'vue'
import type { FScene } from '@fibbojs/core'

// List of properties defined in the component
// Each is an object with the name of the property and wether or not it should be shown in the debug panel
interface ComponentProperty {
  label: string
  shown: boolean
  isNested: boolean
  properties?: ComponentProperty[]
}
const properties: Ref<ComponentProperty[]> = ref([])

// Object describing properties that should be shown by default
// This is used to avoid showing all properties at once
const defaultProperties: any = {
  position: {
    x: true,
    y: true,
    z: true
  },
  rotation: true
}

const props = defineProps({
  title: String,
  scene: {
    type: Object as PropType<FScene>,
    default: null
  }
})

onMounted(() => {
  if (props.scene) {
    props.scene.onComponentAdded((component) => {
      properties.value = Object.keys(component).map((key) => ({
        label: key,
        shown: false,
        // @ts-expect-error - We know this is an object
        isNested: typeof component[key] === 'object',
        // @ts-expect-error - We know this is an object
        properties: typeof component[key] === 'object' ? Object.keys(component[key]).map((nestedKey) => ({
          label: nestedKey,
          shown: false,
          isNested: false
        })) : []
      }))
      // Show default properties
      properties.value.forEach((property) => {
        if (defaultProperties[property.label]) {
          if (property.isNested && property.properties) {
            property.shown = true
            property.properties.forEach((nestedProperty) => {
              if (defaultProperties[property.label][nestedProperty.label]) {
                nestedProperty.shown = true
              }
            })
          } else {
            property.shown = true
          }
        }
      })
    })
  }
})
</script>

<style scoped>
  .f-component-id {
    color: #fff;
    margin: 0;
  }

  .f-debug-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    width: 300px;
    background: #0000009f;
    border-radius: 8px;
    overflow: auto;
  }

  .f-debug-properties--hidden {
    display: none;
  }

  h1 {
    color: red;
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

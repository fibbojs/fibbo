<template>
  <div class="f-component f-component-2d">
    <FComponentHeader
      :component="component"
      :show-details="showDetails"
      @click="showDetails = !showDetails"
    />
    <div class="f-component-properties" :class="{ 'f-component-properties--hidden': !showDetails }">
      <div class="f-component-property">
        <p>Position</p>
        <div class="f-component-property-group">
          <p>x : {{ cropValue(component.position.x) }}</p>
          <p>y : {{ cropValue(component.position.y) }}</p>
        </div>
      </div>
      <div class="f-component-property">
        <p>Rotation</p>
        <div class="f-component-property-group">
          <p>r : {{ cropValue(component.rotation) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'
import type { FComponent2d } from '@fibbojs/2d'
import FComponentHeader from '../common/FComponentHeader.vue'
import { cropValue } from '../../utils/cropValue'

defineProps({
  component: {
    type: Object as PropType<FComponent2d>,
    required: true,
  },
})

const showDetails = ref(false)
</script>

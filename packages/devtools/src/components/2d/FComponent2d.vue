<!-- eslint-disable vue/no-mutating-props -->
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
          <p>x : </p>
          <InputNumber v-model:value="component.x" />
          <p>y : </p>
          <InputNumber v-model:value="component.y" />
        </div>
      </div>
      <div class="f-component-property">
        <p>Scale</p>
        <div class="f-component-property-group">
          <p>x : </p>
          <InputNumber v-model:value="component.scaleX" />
          <p>y : </p>
          <InputNumber v-model:value="component.scaleY" />
        </div>
      </div>
      <div class="f-component-property">
        <p>Rotation (Degree)</p>
        <div class="f-component-property-group">
          <p>r : </p>
          <InputNumber v-model:value="component.rotationDegree" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref } from 'vue'
import type { FComponent } from '@fibbojs/2d'
import FComponentHeader from '../common/FComponentHeader.vue'
import InputNumber from '../forms/InputNumber.vue'

defineProps({
  component: {
    type: Object as PropType<FComponent>,
    required: true,
  },
})

const showDetails = ref(false)
</script>

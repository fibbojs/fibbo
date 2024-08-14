<template>
  <div class="f-component f-component-2d">
    <FComponentIcon :icon-name="iconName" />
    <h4 class="f-component-id">
      {{ component.constructor.name }} ({{ component.__ID__ }})
    </h4>
    <div class="f-component-property">
      <div class="f-component-property-group">
        <p>Position</p>
        <p>x : {{ component.position.x }}</p>
        <p>y : {{ component.position.y }}</p>
      </div>
      <p>r : {{ component.rotation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent2d } from '@fibbojs/2d'
import FComponentIcon from '../icons/FComponentIcon.vue'
import { useComponentIcon } from '../../composables/useComponentIcon'

const props = defineProps({
  component: {
    type: Object as PropType<FComponent2d>,
    required: true,
  },
})

const iconName = useComponentIcon(props.component)
</script>

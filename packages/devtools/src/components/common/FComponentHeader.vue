<template>
  <div class="f-component-header" :class="{ 'f-component-header--open': showDetails }">
    <div class="f-component-header-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24"><path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414" /></svg>
    </div>
    <FComponentIcon :icon-name="iconName" />
    <p class="f-component-name">
      {{ component.constructor.name }} <span class="f-component-id">({{ component.__ID__ }})</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { FComponent } from '@fibbojs/core'
import FComponentIcon from '../icons/FComponentIcon.vue'
import { useComponentIcon } from '../../composables/useComponentIcon'

const props = defineProps({
  component: {
    type: Object as PropType<FComponent>,
    required: true,
  },
  showDetails: Boolean,
})

const iconName = useComponentIcon(props.component)
</script>

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

<style scoped lang="scss">
.f-component-header {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
  border-radius: 8px;
  transition: background 0.1s;
  cursor: pointer;
  height: 18px;
  padding: 4px;

  .f-component-header-arrow {
    display: grid;
    place-items: center;
    width: 16px;
    transition: transform 0.1s;
  }

  .f-component-name {
    margin: 0;
  }

  .f-component-id {
    color: #4d4e4e;
  }

  &:hover {
    background: #1E1F20;
  }
}

.f-component-header--open {
  .f-component-header-arrow {
    transform: rotate(90deg);
  }
}

@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  .f-component-header {
    &:hover {
      background: rgba(0, 0, 0, 0.4) !important;
    }
  }
}
</style>

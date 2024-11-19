<template>
  <div class="f-component-icon">
    <FIconCube v-if="iconName === FComponentIconSet.Cube" />
    <FIconSphere v-else-if="iconName === FComponentIconSet.Sphere" />
    <FIconCapsule v-else-if="iconName === FComponentIconSet.Capsule" />
    <FIconCharacter v-else-if="iconName === FComponentIconSet.Character" />
    <FIconCamera v-else-if="iconName === FComponentIconSet.Camera" />
    <FIconLight v-else-if="iconName === FComponentIconSet.Light" />
    <FIconMesh v-else-if="iconName === FComponentIconSet.Mesh" />
    <FIconSquare v-else-if="iconName === FComponentIconSet.Square" />
    <FIconCircle v-else-if="iconName === FComponentIconSet.Circle" />
    <FIconSprite v-else-if="iconName === FComponentIconSet.Sprite" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import FIconCube from './FIconCube.vue'
import FIconSphere from './FIconSphere.vue'
import FIconCapsule from './FIconCapsule.vue'
import FIconCharacter from './FIconCharacter.vue'
import FIconCamera from './FIconCamera.vue'
import FIconLight from './FIconLight.vue'
import FIconMesh from './FIconMesh.vue'
import FIconSquare from './FIconSquare.vue'
import FIconCircle from './FIconCircle.vue'
import FIconSprite from './FIconSprite.vue'
import { FComponentIconSet } from './FComponentIconSet'

// All icons are from iconify : https://iconify.design/
defineProps({
  iconName: {
    type: String as PropType<FComponentIconSet>,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.f-component-icon {
  width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
}
</style>

<template>
  <div id="toggle-button" :class="{ glassmorphism }">
    <!-- Figgo logo -->
    <FLogoFibbo />
    <!-- Cross icon svg -->
    <svg id="close-cross" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path fill="currentColor" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { State } from '../../State'
import FLogoFibbo from '../icons/FLogoFibbo.vue'

const glassmorphism = ref(State.glassmorphism)

State.onGlassmorphismChange((value) => {
  glassmorphism.value = value
})
</script>

<style lang="scss">
@keyframes animSvgIn {
  from {
    opacity: 0%;
    transform: scale(0.9);
  }

  to {
    opacity: 100%;
    transform: scale(1.0);
  }
}

#toggle-button {
  background: #151617;
  height: 40px;
  width: 40px;
  position: fixed;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  border-radius: 100%;
  transition: all 0.2s ease;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
    animation-name: animSvgIn;
    animation-duration: 0.2s;

    path {
      transition: all 0.2s ease;
    }
  }

  .fibbo-logo {
    path {
      stroke: rgb(147, 147, 147);
    }
  }
  #close-cross {
    display: none;
    width: 18px;
    height: 18px;
  }

  &.visible {
    .fibbo-logo {
      display: none;
    }
    #close-cross {
      display: block;
    }
  }
}

@supports (
  (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
) {
  #toggle-button.glassmorphism {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
</style>

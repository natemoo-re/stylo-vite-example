<template>
  <div class="root">
    <div class="buttons">
      <ModeToggle />
      <DensitySlider />
    </div>

    <div class="buttons">
      <button @click="previous">
        -
      </button>
      <div class="token">{{ size }}</div>
      <button @click="next">
        +
      </button>
    </div>

    <StackGap :gap="size" />
  </div>
</template>

<script>
import ModeToggle from './ModeToggle.vue';
import DensitySlider from './DensitySlider.vue';
import StackGap from './StackGap.vue';

import { computed } from 'vue'
import { useCycle } from '../utils/cycle.ts';

export default {
  setup() {
    const [size, { next, previous }] = useCycle('xs', 'sm', 'md', 'lg', 'xl', '2xl');

    return {
      next,
      previous,
      size
    }
  },
  components: { 
    ModeToggle,
    DensitySlider,
    StackGap
  }
}
</script>

<style scoped>
  .root {
    display: grid;
    place-items: center;
    gap: md;
    transition: gap quickOut;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: sm;
  }

  .token {
    width: 8ch;
  }
</style>

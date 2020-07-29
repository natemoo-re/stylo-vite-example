<template>
  <div class="stack" :style="style">
    <div class="square" :key="index" v-for="(item, index) of Array.from({ length: 4 })" />
  </div>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import { useStylo } from '@stylo/vue';

export default {
  props: {
    gap: { type: String, required: true }
  },
  setup(props) {
    const { token } = useStylo();
    const style = reactive({
      gap: null
    });
    watchEffect(() => {
      style.gap = token('space', props.gap)
    });

    return {
      style
    }
  }
}
</script>

<style scoped>
  .stack {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: gap quickOut;
  }

  .square {
    --size: 64px;
    width: var(--size);
    height: var(--size);
    background: text;
    transition: background slowOut;
  }
</style>

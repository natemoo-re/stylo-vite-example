<template>
  <div class="density">
    <input type="range" min="4" max="12" :value="space" @input="setSpace($event)">
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStylo } from '@stylo/vue';

export default {
  setup() {
    const { themeOverrides } = useStylo(); 
    
    const space = computed(() => themeOverrides?.get('space.base') ?? 8);
    function setSpace({ target: { valueAsNumber: value }}) {
      themeOverrides?.set({ space: { base: value }})
    }

    return {
      space,
      setSpace
    }
  }
}
</script>

<style scoped>
  .density {
    display: flex;
    align-items: center;
    gap: sm;
  }
</style>

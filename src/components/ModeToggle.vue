<template>
  <div class="root">
    <button @click="toggle">
        Use {{ isDark ? 'Light' : 'Dark'}} Mode
      </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStylo } from '@stylo/vue';

export default {
  setup() {
    const { mode } = useStylo();

    const isDark = computed(() => mode.contains('dark'));
    const toggle = () => mode.toggle('dark');

    return {
      toggle,
      isDark
    }
  }
}
</script>

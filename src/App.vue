<template>
  <Demo />
</template>

<script lang="ts">
import Demo from './components/Demo.vue'
import { provideStylo, persist } from '@stylo/vue'

const get = (name) => {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (e) {}
  return null;
}

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {

    const mode = localStorage.getItem('stylo:mode');
    const themeOverrides = get('stylo:themeOverrides');

    provideStylo({
        mode,
        themeOverrides,
        onModeChange(value) {
          if (value) {
            localStorage.setItem('stylo:mode', `${value}`);
          } else {
            localStorage.removeItem('stylo:mode');
          }
        },
        onThemeOverridesChange(value) {
          if (value) {
            localStorage.setItem('stylo:themeOverrides', JSON.stringify(value));
          } else {
            localStorage.removeItem('stylo:themeOverrides')
          }
        }
    })
  }
}
</script>

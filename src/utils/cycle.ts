import { ref, computed } from 'vue';

export function useCycle(...args) {
    const i = ref(0)
    function next() {
      if (i.value < args.length - 1) {
        i.value++;
        return;
      }
      i.value = 0;
    }
    function previous() {
      if (i.value > 0) {
        i.value--;
        return;
      }
      i.value = args.length - 1;
    }
  return [computed(() => args[i.value]), { next, previous }];
}

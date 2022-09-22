import { defineStore } from 'pinia';
import { ref } from 'vue';
import { store } from '/@/stores';

export const useCounterStore = defineStore('test', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});

// export const useCounterStore = defineStore('test', {
//   state: () => {
//     return {
//       count: 0,
//     };
//   },
//   getters: {},
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

export function useCounterStoreWithOut() {
  return useCounterStore(store);
}

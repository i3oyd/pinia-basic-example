import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    reset(){
      this.counter = 0;
    },
    random(){
      this.counter = Math.floor(Math.random() * 11);
    }
  },
});

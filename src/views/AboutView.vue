
<script setup lang="ts">
//import { mapActions, mapStores, mapState } from 'pinia';
import { useCounterStore } from '@/stores/counter'
 
// export default {
//   computed: {
//     // other computed properties
//     // ...
//     // gives access to this.counterStore and this.userStore
//     ...mapStores(useCounterStore),
//     // gives read access to this.count and this.double
//     ...mapState(useCounterStore, ['counter', 'doubleCount']),
//   },
//   methods: {
//     // gives access to this.increment()
//     ...mapActions(useCounterStore, ['increment','reset','random']),
//   },
// }

const main = useCounterStore()
</script>
<template>
  <div class="container pt-5 flex flex-col items-center">
    <h1>This is an about page</h1>
    <h1 class="text-red-500">{{ main.counter }}</h1>
    <h1 class="tex-cyan-500">{{ main.doubleCount }}</h1>
    <button class="bg-indigo-500 rounded-sm px-5 text-white" @click="main.increment()">Add</button>
    <button class="bg-teal-500 rounded-lg px-5 text-white" @click="main.reset">Reset</button>
    <button class="bg-orange-500 rounded-lg px-5 text-white" @click="main.random">Random</button>
  </div>
</template>

<template>
  <h1 class="text-4xl font-bold">{{ msg }}</h1>

  <p class="py-6">
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    |
    <a href="https://next.vuex.vuejs.org/" target="_blank">Vuex</a>
    |
    <a href="https://next.router.vuejs.org/" target="_blank">Vue Router</a>
    |
    <a href="https://tailwindcss.com/" target="_blank">Tailwind css</a>
  </p>

  <button class="bg-green-500 text-white rounded py-1 px-2 mb-6" type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code class="bg-green-100 text-green-500 rounded p-1">components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import store from '../store'
</script>

<template>
  <div class="flex items-center justify-center h-full p-6">
    <div class="text-center">
      <img class="w-32 h-32 mx-auto mb-3" alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld :msg="store.state.greating" />
    </div>
  </div>
</template>

<style scoped>

</style>

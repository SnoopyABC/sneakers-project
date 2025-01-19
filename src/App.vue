<!-- eslint-disable no-debugger -->
<script setup>
import MyHello from '@/components/MyHello.vue'
import { ref } from 'vue'

const puma = ref({
  name: "Puma",
  price: 123000
});

</script>

<template>
  <header>
    <div class="wrapper">
      <MyHello :name="puma.name" :price="puma.price"></MyHello>
    </div>
    <button @click="changeName">Change Name</button>
  </header>
</template>

<style scoped>
</style>

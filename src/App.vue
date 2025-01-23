<!-- eslint-disable no-debugger -->
<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-14">
    <Header />
    <div class="p-10">
      <RouterView />
    </div>
    
  </div>
</template>

<style scoped></style>

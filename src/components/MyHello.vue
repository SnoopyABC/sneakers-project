<template>
  <div class="sneakers-list-item mb-5">
    <h3>Name: {{ name }}</h3>
    <div>Price: {{ price }}</div>
  </div>
</template>

<script setup>
  defineProps({
    name: {
      type: String,
      default: "None",
    },
    price: {
      type: Number,
      default: 0
    }
  })
</script>

<style scoped>
  .sneakers-list-item{
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
  }
</style>
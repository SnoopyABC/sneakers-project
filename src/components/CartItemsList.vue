<script setup>
import CartItem from './CartItem.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <CartItem img="/sneakers/sneakers-1.jpg" title="Some title" :price="3000"></CartItem>
    <CartItem img="/sneakers/sneakers-1.jpg" title="Some title" :price="3000"></CartItem>
    <CartItem img="/sneakers/sneakers-1.jpg" title="Some title" :price="3000"></CartItem>
    <CartItem img="/sneakers/sneakers-1.jpg" title="Some title" :price="3000"></CartItem>
  </div>
</template>

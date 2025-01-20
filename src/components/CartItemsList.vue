<script setup>
import CartItem from './CartItem.vue'

defineProps({
  items: Array,
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <CartItem
      v-for="item in items"
      :key="item.id"
      :img="item.imageUrl"
      :title="item.title"
      :price="item.price"
    ></CartItem>
  </div>
</template>

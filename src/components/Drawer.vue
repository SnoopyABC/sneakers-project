<script setup>
import DrawerHeader from './DrawerHeader.vue'
import CartItemList from './CartItemsList.vue'
</script>

<template>
  <div>
    <div class="fixed top-0 lef-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="fixed right-0 top-0 z-20 bg-white w-96 h-full p-8 mt-7">
      <DrawerHeader />
      <CartItemList />

      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>12900</b>
        </div>
        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>500</b>
        </div>
        <button
          disabled
          class="bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer mt-7"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

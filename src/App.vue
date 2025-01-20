<!-- eslint-disable no-debugger -->
<script setup>
import Header from '@/components/Header.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
</script>

<template>
  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-14">
    <Header />
    <!-- <Drawer /> -->
    <div class="p-10">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">Все кросовки</h2>
        <div class="flex gap-4">
          <select
          class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="price">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <img src="/search.svg" class="absolute left-4 top-3" alt="" />
          <input
            placeholder="Поиск..."
            class="border border-gray-200 rounded-md py-2 pl-10 pr-4 outline-none"
          />
        </div>
        </div>

      </div>
    </div>
    <CardList />
  </div>
</template>

<style scoped></style>

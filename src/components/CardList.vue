<!-- eslint-disable no-debugger -->
<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
})

const onClickAdd = () => {
  alert('Clicked add')
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5 p-10">
    <Card
      v-for="item in items"
      :key="item.id"
      :img="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :onAddClicked="onClickAdd"
    />
  </div>
</template>

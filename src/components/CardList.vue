<!-- eslint-disable no-debugger -->
<script setup>
import Card from './Card.vue';

defineProps({
  items: Array,
});

const emit = defineEmits(['onClickAdded'])

const onClickAdd = () => {
  alert('Clicked add');
  emit('onClickAdded', item)
};


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
      :isFavorite="item.isFavorite"
      :onAddFavorites="() => {
        emit('onClickAdded', item);
      }"
    />
  </div>
</template>

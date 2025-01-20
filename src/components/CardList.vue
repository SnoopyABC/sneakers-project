<!-- eslint-disable no-debugger -->
<script setup>
  import Card from './Card.vue';

 const onClickAdd = () => {
  alert("Clicked add");
 }
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      title="Мужикие кросовки Nike Blazers"
      :price="5000"
      img="/sneakers/sneakers-1.jpg"
      :isFavorite="true"
      :onAddClicked="onClickAdd"
    />
  </div>
</template>
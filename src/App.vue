<!-- eslint-disable no-debugger -->
<script setup>
import { onMounted, ref, watch, reactive } from 'vue';
import axios from 'axios';

import Header from '@/components/Header.vue';
import CardList from '@/components/CardList.vue';
import Drawer from '@/components/Drawer.vue';

const items = ref([]);

const filters = reactive({
  sortBy: 'title',
  searchQuary: '',
});

const onSearchChanged = (event) => {
  filters.searchQuary = event.target.value;
};
const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchQuary) {
      params.title = `*${filters.searchQuary}`;
    }

    const { data } = await axios.get(`https://dd76fd950f2f69f3.mokky.dev/items`, { params });
    items.value = data.map((element) => {
      return {
        ...element,
        isFavorite: false,
        isLiked: false,
      };
    });
  } catch (e) {
    console.log(e);
  }
};

const fetchFavorites = async () => {
  try {
    const { data: aFavorites } = await axios.get(`https://dd76fd950f2f69f3.mokky.dev/favorites`);
    items.value = items.value.map((item) => {
      const favorite = aFavorites.find((favorite) => favorite.parentId === item.id);

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });
    console.log(items.value);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  fetchItems();
  fetchFavorites();
});
watch(filters, fetchItems);
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
            @change="onChangeSelect"
          >
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>
          <div class="relative">
            <img src="/search.svg" class="absolute left-4 top-3" alt="" />
            <input
              placeholder="Поиск..."
              class="border border-gray-200 rounded-md py-2 pl-10 pr-4 outline-none"
              @keyup.enter="onSearchChanged"
            />
          </div>
        </div>
      </div>
    </div>
    <CardList :items="items" />
  </div>
</template>

<style scoped></style>

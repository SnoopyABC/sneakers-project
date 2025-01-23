import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import axios from 'axios';

export const useSneakersStore = defineStore('sneakers', () => {
  const items = ref([]);
  const filters = reactive({
    sortBy: 'title',
    searchQuary: '',
  });

  async function fetchItems() {
    try {
      const params = {
        sortBy: this.filters.sortBy,
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
  }

  return { items, filters, fetchItems };
});

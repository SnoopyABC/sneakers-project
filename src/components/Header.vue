<script setup>
// import { useSneakersStore } from '../stores/sneakers';
// const sneakersStore = useSneakersStore();
// console.log(sneakersStore);

// const onButtonClick = () => {
//   sneakersStore.increment();
// };
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <RouterLink to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-11" />
        <div>
          <h2 class="font-bold text-xl uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>
    </RouterLink>

    <ul class="flex items-center gap-10">
      <li class="flex items-center gap-3 cursor-pointer">
        <img src="/cart.svg" alt="Cart" />
        <b>0</b>
      </li>
      <RouterLink to="/favorites">
        <li class="flex items-center gap-3 cursor-pointer">
          <img src="/heart.svg" alt="Favorite" />
          <span>Закладки</span>
        </li>
      </RouterLink>
      <li class="flex items-center gap-3 cursor-pointer">
        <img src="/profile.svg" alt="Favorite" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>

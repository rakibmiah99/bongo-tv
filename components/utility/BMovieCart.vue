<script setup lang="ts">
import BIMDB from "~/components/utility/BIMDB.vue";
const props = defineProps(['movie']);
const image = "https://m.media-amazon.com/images/M/MV5BZTc1NDFlN2MtOWFjZi00ZWNmLTk1MmEtYThjNDgxNjY2YjU2XkEyXkFqcGdeQXVyNjQxNDYyODI@._V1_.jpg";
</script>

<template>
  <div class="hover:opacity-80 rounded-lg cursor-pointer">
    <NuxtImg class="rounded-lg mt-1 h-[300px] object-cover w-[230px]" :src="props.movie.thumbnail"/>
    <div class="p-2">
      <p class="text-lg font-bold mt-1 line-clamp-1 text-left">{{props.movie.name}}</p>
      <p class="text-violet-950 mt-1 text-left">{{props.movie.year}}</p>
      <div class="mt-1 flex justify-between">
        <BIMDB :rating="props.movie.rating"></BIMDB>
        <div class="icons flex">
          <UButton class="p-2" color="violet" variant="ghost">
            <UIcon name="i-heroicons-eye"></UIcon>
          </UButton>
          <UButton class="p-2" color="violet" variant="ghost">
            <UIcon  name="i-heroicons-heart"></UIcon>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>


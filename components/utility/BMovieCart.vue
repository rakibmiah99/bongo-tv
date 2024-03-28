<script setup lang="ts">
import BIMDB from "~/components/utility/BIMDB.vue";

const image = "https://m.media-amazon.com/images/M/MV5BZTc1NDFlN2MtOWFjZi00ZWNmLTk1MmEtYThjNDgxNjY2YjU2XkEyXkFqcGdeQXVyNjQxNDYyODI@._V1_.jpg";

</script>

<template>
  <div class="hover:opacity-80 rounded-lg cursor-pointer">
    <NuxtImg class="rounded-lg mt-1" :src="image"/>
    <div class="p-2">
      <p class="text-lg font-bold mt-1 text-left">Gunin</p>
      <p class="text-purple-950 mt-1 text-left">2022</p>
      <div class="mt-1 flex justify-between">
        <BIMDB rating="8.5"></BIMDB>
        <div class="icons flex">
          <UButton class="p-2" color="indigo" variant="ghost">
            <UIcon name="i-heroicons-eye"></UIcon>
          </UButton>
          <UButton class="p-2" color="indigo" variant="ghost">
            <UIcon  name="i-heroicons-heart"></UIcon>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
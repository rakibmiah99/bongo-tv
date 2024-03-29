<template>
  <UContainer>
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-2xl">Based on your watched</h1>
      <UButton icon="i-heroicons-queue-list" color="violet" variant="soft">Show All</UButton>
    </div>
    <div class="">
      <Carousel :items-to-show="3">
        <Slide v-for="slide in 10" :key="slide">
          <BWatchItem class="w-full"/>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

    </div>
  </UContainer>
</template>
<script setup>


import BWatchItem from "~/components/utility/BWatchItem.vue";
</script>
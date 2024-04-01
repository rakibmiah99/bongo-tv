<template>
  <div class="mt-5 py-8 odd:bg-violet-50">
    <UContainer>
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl">{{props.data.name}}</h1>
        <UButton :to="props.data.slug" icon="i-heroicons-queue-list" color="violet" variant="soft">Show All</UButton>
      </div>
      <Carousel v-bind="settings" :breakpoints="breakpoints" >
        <Slide v-for="(movie, index) in props.data.movies" :key="index">
          <BMovieCart :movie="movie"/>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </UContainer>
  </div>
</template>
<script setup>
import BMovieCart from "~/components/utility/BMovieCart.vue";
const props = defineProps(['data'])



const settings =  {
  itemsToShow: 1,
  snapAlign: 'center',
}

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}
</script>

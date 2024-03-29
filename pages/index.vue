<template>
  <BHeader/>
  <div class="mt-5 bg-gray-100 py-8">
    <UContainer>
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl">MOVIES YOU MUST WATCH</h1>
        <UButton icon="i-heroicons-queue-list" color="violet" variant="soft">Show All</UButton>
      </div>
      <Carousel v-bind="settings" :breakpoints="breakpoints" >
        <Slide v-for="slide in 10" :key="slide">
          <BMovieCart/>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </UContainer>
  </div>
  <div class="mt-5 py-8">
    <UContainer>
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl">MOVIES YOU MUST WATCH</h1>
        <UButton icon="i-heroicons-queue-list" color="violet" variant="soft">Show All</UButton>
      </div>
      <Carousel v-bind="settings" :breakpoints="breakpoints" >
        <Slide v-for="slide in 10" :key="slide">
          <BMovieCart/>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </UContainer>
  </div>
  <div class="mt-5 bg-gray-100 py-8">
    <UContainer>
      <div class="mb-6 flex justify-between items-center">
        <h1 class="text-2xl">MOVIES YOU MUST WATCH</h1>
        <UButton icon="i-heroicons-queue-list" color="violet" variant="soft">Show All</UButton>
      </div>
      <Carousel v-bind="settings" :breakpoints="breakpoints" >
        <Slide v-for="slide in 10" :key="slide">
          <BMovieCart/>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </UContainer>
  </div>

  <div class="py-8">
    <BWatched/>
  </div>

  <Footer/>
</template>

<script setup>
import BMovieCart from "~/components/utility/BMovieCart.vue";
import Footer from "~/components/Footer.vue";
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

<style scoped>
    .carousel__pagination{
      display: flex;
      justify-content: start;
    }
    .carousel__slide {
      padding: 5px;
    }


    .carousel__slide--sliding {
      transition: 0.5s;
    }

    .carousel__slide {
      opacity: 0.9;
      //transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--prev {
      opacity: 1;
      transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
      opacity: 1;
      //transform: rotateY(10deg) scale(1.1);
    }

    .carousel__slide--active {
      opacity: 1;
      //transform: rotateY(0) scale(1.1);
    }
</style>
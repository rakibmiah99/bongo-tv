<script setup lang="ts">
import BIMDB from "~/components/utility/BIMDB.vue";
const {headerMovieStore} = useSliderHeaderMovie();
const props = defineProps('movies');
const {width, height} = useWindowSize()
const img1 = 'https://hips.hearstapps.com/hmg-prod/images/how-does-netflix-s-the-gentlemen-tv-show-relate-to-the-original-film-1-65a6739711094.png?crop=0.9991645781119465xw:1xh;center,top&resize=1200:*';
const image_thumbnail = 'https://scontent.fdac110-1.fna.fbcdn.net/v/t39.30808-6/290123296_2123057207854740_6680413182665492920_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-88ttZEwWqn47Rb6Cgwb4QIXIoEKlbelAhcigQqVt6b79GraAQROaRIfzo00bxcjZxcH4ZiETrJTx-x2SjLK0&_nc_ohc=txxiAksVXyUAX8MjZUR&_nc_oc=AdgL09mTdb9XwHnpe2d5HEsbKGc3DgfsdYdpGw4jXJTgNcLQpsbIQF5GetFh4naMirg&_nc_ht=scontent.fdac110-1.fna&oh=00_AfB5oPJ4z9qGskRdqfjLNmYez4rr4dVS1Ylyl1W7VZUglA&oe=6609BFBD';
const sliders = [
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
  {
    image: img1
  },
]
</script>

<template>
  <Carousel>
    <Slide v-for="movie in headerMovieStore" :key="movie">
      <div :style="{height: height+'px'}" class="w-full relative">
        <div class="bg-no-repeat w-full h-full absolute  bg-cover bg-blend-multiply bg-violet-400" :style="{'background-image': 'url('+sliders[0].image/*movie.cover*/+')', zIndex: '-1'}"></div>
        <div class="z-20 mt-[150px] pb-[70px]">
          <UContainer>
            <div class="text-white">
              <BIMDB :rating="movie.rating"></BIMDB>

              <div class="category flex mt-2 uppercase">
                2019 - Drama - Returning Series
              </div>

              <p class="flex streaming-now mt-5 text-[40px] sm:text-[40px] md:text-[40px] lg:text-[54px]">STREAMING NOW</p>
              <span class="flex font-bold header-movie-title mt-[-30px] text-[64px] sm:text-[64px] md:text-[64px] lg:text-[84px] break-words">{{movie.name.slice(0, 10)}}</span>
              <div class="flex flex-col sm:flex-col md:flex-row">
                <div class="md:w-7/12 lg:w-3/5">
                  <p class=" w-[500px] line-clamp-3 text-left">
                    {{movie.description}}
                  </p>
                  <div class="flex mt-5">
                    <UButton icon="i-heroicons-play" color="violet" class="uppercase me-3 bg-black px-5 py-3 rounded-none">Watch Now</UButton>
                    <UButton icon="i-heroicons-bookmark" color="white" variant="outline"  class="uppercase  px-5 py-3 rounded-none"/>
                  </div>
                </div>
                <div class="flex md:w-5/12 lg:w-2/5 items-center mt-[15px] md:mt-[-15px]">
                  <NuxtImg class="h-[200px] w-[250px]" :src="movie.thumbnail"></NuxtImg>
                  <div class="bg-black items-center p-4 justify-between flex text-white h-[150px] w-full">
                    <div class="text-left p-2">
                      <p class="text-gray-700">Play Next</p>
                      <p class="text-lg font-bold">KAISER</p>
                      <p class="text-lg font-bold">STREAMING NOW</p>
                      <p class="text-gray-700">90 min</p>
                    </div>
                    <UIcon name="i-heroicons-play h-[70px] w-[70px]"></UIcon>
                  </div>
                </div>
              </div>
            </div>
          </UContainer>
        </div>
      </div>


    </Slide>
    <template #addons>
      <!--        <Navigation />-->
      <!--        <Pagination />-->
    </template>
  </Carousel>
</template>

<style scoped>


  .carousel__slide {
    padding: 0;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
</style>
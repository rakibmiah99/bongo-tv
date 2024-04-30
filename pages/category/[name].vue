<template>
  <BHeader/>

  <CategoryWisedSectionMove :data="category" v-for="category in categoryWiseMovieStore"/>

  <div class="py-8">
    <BWatched/>
  </div>

  <Footer/>
</template>

<script setup>
import Footer from "~/components/BFooter.vue";
import {useCategoryWiseMovie} from "~/composables/useCategoryWiseMovie.js";
import {getHomepageData, getCategoryPageData} from "~/composables/api.js";
const route = useRoute();

const {categoryWiseMovieStore, makeCategoryWiseMovie} = useCategoryWiseMovie();
onMounted(() => getCategoryPageData(route.params.name))

</script>
~/composabless/useCategoryWiseMovie.js~/composabless/api.js
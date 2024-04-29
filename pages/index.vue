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
import {getHomepageData} from "~/composables/api.js";
import BFixedNav from "~/components/nav/BFixedNav.vue";
definePageMeta({
  middleware: 'auth'
})
const {data, getProviders} = useAuth();
console.log('providers', await getProviders())
console.log('data', data.value)
const {signOut} = useAuth();
// await signOut();

const {categoryWiseMovieStore, makeCategoryWiseMovie} = useCategoryWiseMovie();

onMounted(() => getHomepageData())

</script>

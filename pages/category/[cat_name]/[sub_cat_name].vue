<template>
  <BFixedNav/>
  <UContainer class=" mt-5 ">
    <UBreadcrumb :links="links" :ui="{ ol: 'gap-x-3', li: 'gap-x-3' }" class="p-2">
      <template #divider>
        <span class="w-8 h-1 rounded-full bg-violet-600 dark:bg-gray-700" />
      </template>
      <template #default="{ link, isActive, index }">
        <UBadge :color="isActive ? 'gray' : 'violet'" class="rounded-sm px-3 py-2 uppercase">
          {{ link.label }}
        </UBadge>
      </template>
    </UBreadcrumb>
    <div class="flex mt-5 flex-wrap">
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
      <BMovieCart class="p-2 basis-1/5 border-b " :movie="movie"></BMovieCart>
    </div>
  </UContainer>

  <BFooter/>
</template>
<script setup>
  import BFixedNav from "~/components/nav/BFixedNav.vue";
  import BMovieCart from "~/components/utility/BMovieCart.vue";
  const movie = {
    name: 'my movie',
    slug: '',
    rating: 4.4,
    year: 2022,
    thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTc1NDFlN2MtOWFjZi00ZWNmLTk1MmEtYThjNDgxNjY2YjU2XkEyXkFqcGdeQXVyNjQxNDYyODI@._V1_.jpg'
  }
  const route = useRoute();

  const links = [{
    label: 'Home',
    to: '/'
  }, {
    label: route.params.cat_name,
    to: '/category/'+route.params.cat_name,
  }, {
    label: route.params.sub_cat_name,
  }]
  console.log(route.params)
</script>
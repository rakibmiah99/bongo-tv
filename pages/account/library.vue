<template>
    <h1 class="px-4 text-sm">Showing All Favorite Videos</h1>
    <ul role="list" class="mt-3">
      <li v-for="movie in movies" class="group/item hover:bg-slate-100 space-x-3 flex p-4 rounded-md">
        <img class="w-[250px] object-cover h-[90px] rounded-md" :src="movie.thumbnail ?? 'https://cdn.bongo-solutions.com/919f93a7-400e-4149-a70d-204beb589074/content/0366ef13-2b99-494d-9f6c-7fd6cc316cea/08fb5b59-d030-41ee-80b0-3eae8de65d3a.jpg?width=300'" alt="" />
        <div style="" class="pr-[70px]">
          <h1 class="text-2xl font-bold">{{ movie.name }}</h1>
          <p class="line-clamp-2 mt-1 text-xs">When the Russian Prime Minister's children are abducted and Chernobyl's nuclear plant is seized by terrorists, a team of four Universal Soldiers is di.... </p>
        </div>
        <div class="flex justify-center items-center">
          <UButton size="xs" icon="i-heroicons-trash" color="red"></UButton>
        </div>
      </li>
    </ul>
    <div>
      <UPagination
          :active-button="{ variant: 'solid', color: 'violet' }"
          :inactive-button="{ color: 'gray' }"
          v-model="page"
          :page-count="1"
          size="xs",
          to="/abc"
          :total="links.length"
          class="justify-start mt-5"
      />
    </div>
  </template>
  <script setup lang="ts">
    import {definePageMeta} from "#imports";
    const page = ref(1)
    const movies = ref([]);
    const links = ref([]);
    watch(page, async (newPage, oldPage) => {

        const {error, data} = await getFavorite(newPage);
        if(!error.value){
          movies.value = data.value.data;
          links.value = data.value.links;
          console.log('ff', data.value.links)
        }
    });

    definePageMeta({
      // layout: 'user-profile-layout'
      layout: 'user-profile-layout'
    })
    
    const {error, data} = await getFavorite();
    async function getFavorite(page = 1){
      const {data, pending, error, status} = await useFetch(useRuntimeConfig().public.BASE_URL+"/account/favourite?page="+page, {
        // mode: 'no-cors',
        headers: {
          Authorization: "Bearer 5|9Iq5K4zmXaIQCJLKFYTo53XotRr1OcpT0McKPF9j034a0d4d",
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin' :  '*'
        },
        transform: (_data) => {
            return _data.data;
        }
      })

      return {data, error};
    }

    if(!error.value){
      movies.value = data.value.data;
      links.value = data.value.links;
      console.log('ff', data.value.links)
    }
  


  </script>
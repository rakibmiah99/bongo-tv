<template>
  <h1 class="px-4 text-sm">Showing All Favorite Videos</h1>
  <ul role="list" class="mt-3">
    <li class="group/item hover:bg-slate-100 space-x-3 flex p-4 rounded-md">
      <img class="w-[130px] rounded-md" src="https://cdn.bongo-solutions.com/919f93a7-400e-4149-a70d-204beb589074/content/0366ef13-2b99-494d-9f6c-7fd6cc316cea/08fb5b59-d030-41ee-80b0-3eae8de65d3a.jpg?width=300" alt="" />
      <div style="" class="pr-[70px]">
        <h1 class="text-2xl font-bold">Hip Hop 2</h1>
        <p class="line-clamp-2 mt-1 text-xs">When the Russian Prime Minister's children are abducted and Chernobyl's nuclear plant is seized by terrorists, a team of four Universal Soldiers is di.... </p>
      </div>
      <div class="flex justify-center items-center">
        <UButton size="xs" icon="i-heroicons-trash" color="red"></UButton>
      </div>
    </li>
    <li class="group/item hover:bg-slate-100 space-x-3 flex p-4 rounded-md">
      <img class="w-[130px] rounded-md" src="https://cdn.bongo-solutions.com/919f93a7-400e-4149-a70d-204beb589074/content/0366ef13-2b99-494d-9f6c-7fd6cc316cea/08fb5b59-d030-41ee-80b0-3eae8de65d3a.jpg?width=300" alt="" />
      <div style="" class="pr-[70px]">
        <h1 class="text-2xl font-bold">Hip Hop 2</h1>
        <p class="line-clamp-2 mt-1 text-xs">When the Russian Prime Minister's children are abducted and Chernobyl's nuclear plant is seized by terrorists, a team of four Universal Soldiers is di.... </p>
      </div>
      <div class="flex justify-center items-center">
        <UButton size="xs" icon="i-heroicons-trash" color="red"></UButton>
      </div>
    </li>
    <li class="group/item hover:bg-slate-100 space-x-3 flex p-4 rounded-md">
      <img class="w-[130px] rounded-md" src="https://cdn.bongo-solutions.com/919f93a7-400e-4149-a70d-204beb589074/content/0366ef13-2b99-494d-9f6c-7fd6cc316cea/08fb5b59-d030-41ee-80b0-3eae8de65d3a.jpg?width=300" alt="" />
      <div style="" class="pr-[70px]">
        <h1 class="text-2xl font-bold">Hip Hop 2</h1>
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
        :page-count="5"
        size="xs"
        :total="items.length"
        class="justify-start mt-5"
    />
  </div>
</template>
<script setup lang="ts">
  import {definePageMeta} from "#imports";
  const page = ref(1)
  const items = ref(Array(55))

  definePageMeta({
    // layout: 'user-profile-layout'
    layout: 'user-profile-layout'
  })
</script>
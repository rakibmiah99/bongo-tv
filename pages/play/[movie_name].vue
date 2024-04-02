<template>
    <BFixedNav/>
    <UContainer>
      <div class="player h-[400px] w-full bg-gray-100">

      </div>

<!--      Buy Now Section-->
      <div class="flex bg-violet-100 p-4 justify-between">
        <div class="">
          <h1 class="text-xl text-violet-900 font-bold">Starting from $100</h1>
          <p class="text-sm mt-1">Enjoy premium experience without any ads</p>
        </div>
        <div class="">
          <UButton label="Remove Ads" size="xl" color="violet"/>
        </div>
      </div>


<!--      Movie Details-->
      <div class="py-6 space-y-3">
        <div class="flex justify-between">
          <h1 class="text-3xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
          <div class="social flex space-x-3">
            <UButton icon="i-heroicons-hand-thumb-up" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded"/>
            <UButton icon="i-heroicons-hand-thumb-down" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded"/>
            <UButton icon="i-heroicons-plus" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded" label="My List"/>
            <UButton icon="i-heroicons-share" class="text-violet-500 hover:text-white hover:bg-violet-500 bg-violet-50 rounded" label="Share"/>
          </div>
        </div>

<!--        description-->
        <p class="text-gray-700">2023 • TV Series • 28 Min 27 Sec </p>
        <div class="flex justify-between text-gray-700">
          <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
          <p>Genres: Drama, Romance</p>
        </div>

<!--        tabs-->
        <div class="">
          <UTabs :items="items" :default-index="0" :ui="uiConfig">
            <template #default="{ item, index, selected }">
              <div class="flex gap-2 relative">
                <span class="truncate text-left">{{ item.label }}</span>
<!--                <span v-if="selected" class="text-violet-900" />-->
              </div>
            </template>
            <template #episod="{item}">
              <div>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
                <NuxtLink class="flex space-x-3 border-b p-3 even:bg-violet-50">
                  <NuxtImg width="200" src="https://cdn.bongo-solutions.com/abfea462-f64d-491e-9cd9-75ee001f45b0/content/79e519c5-47e0-4a29-916b-c2032f225ad7/fdc1fe99-82c1-4987-8127-dc1bd19bbbe5.jpg"/>
                  <div>
                    <h1 class="text-xl font-bold">When I See Your Face - Chena Chena Lage - S1 E1</h1>
                    <p>Lumina and Lianju meet for the first time. But can Lumina remember him?</p>
                  </div>
                </NuxtLink>
              </div>
<!--              <p class="text-2xl">{{item.content}}</p>-->
            </template>

          </UTabs>
        </div>
      </div>
    </UContainer>
    <BFooter/>
</template>
<script setup lang="ts">
import BFixedNav from "~/components/nav/BFixedNav.vue";

const uiConfig = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full py-5',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-white dark:bg-gray-800',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-0',
    height: 'h-10',
    width: 'w-1/3',
    marker: {
      wrapper: 'absolute top-[4px] h-[42px!important] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full font-bold h-full border-b-4 border-violet-500',
      background: 'bg-violet-50',
      rounded: 'rounded-none',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative pl-3 inline-flex justify-start flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-violet-500 font-fold',
      inactive: 'text-gray-500 dark:text-gray-400',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-md',
      font: 'font-medium',
      rounded: 'rounded-none',
      shadow: '',
    },
  },
}
const items = [
    {
      slot: 'episod',
      label: 'Episode',
      content: 'This is the content shown for Tab1'
    },
    {
      slot: 'more',
      label: 'More Like This',
      content: 'And, this is the content for Tab2'
    }
]
</script>
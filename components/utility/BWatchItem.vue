<template>
  <NuxtLink class="hover:opacity-80 pr-1 pb-1 cursor-pointer">
    <div class="h-[200px] w-full relative">
      <div class="absolute inset-0 w-full h-full" :style="style">
      </div>
      <NuxtImg class="absolute w-full h-full mix-blend-multiply object-cover" :src="image"/>
      <div class="absolute h-full w-full p-4">
        <div class="flex flex-col items-baseline justify-between h-full">
          <UButton color="violet" class="rounded-full uppercase px-4" variant="solid" size="xs">Fantasy</UButton>
          <div>
            <div class="statics gap-2 flex text-gray-200">
              <div class="flex gap-1 text-xs items-center">
                <UIcon name="i-heroicons-clock"/>
                <span class="">2hr 23mins</span>
              </div>
              <div class="flex gap-1 text-xs items-center">
                <UIcon name="i-heroicons-eye"/>
                <span class="">21K views</span>
              </div>
            </div>
            <h1 class="text-3xl text-left mt-1 font-bold uppercase text-white">SHAHOS</h1>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const style = {
  background: "linear-gradient(to right top, #0b0b0b, #404040, #7b7b7b00, #bbb0, #fff0)",
}

const image = 'https://snagfilms-a.akamaihd.net/dd078ff5-b16e-45e4-9723-501b56b9df0a/images/2022/10/10/1665398327793_1920x1080_16x9Images.jpg';
</script>
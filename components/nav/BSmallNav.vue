<script setup lang="ts">
import {useUtility} from "~/composables/useUtility";
const {isSidebarOpenStore} = useUtility();
const handleSidebar = () => {
  isSidebarOpenStore.value = true;
}


</script>

<template>
  <UContainer>
    <div class="mt-5 bg-white rounded-lg py-4 px-8">
      <div class="flex justify-between items-center">
        <!--LOGO-->
        <div class="brand">
          <h1 class="text-2xl uppercase font-bold">
            <span class="text-purple-950">Bong</span>
            Play
          </h1>
        </div>
        <!--COLLAPSE-->
        <UButton icon="i-heroicons-bars-3" color="indigo" @click="handleSidebar"/>
      </div>
    </div>
  </UContainer>
</template>

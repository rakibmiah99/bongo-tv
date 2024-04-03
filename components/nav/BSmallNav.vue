<script setup>
import {useUtility} from "~/composables/useUtility";
import BSidebar from "~/components/nav/BSidebar.vue";
const {isSidebarOpenStore} = useUtility();
const handleSidebar = () => {
  isSidebarOpenStore.value = true;
}

const props = defineProps({
  with_container: {
    default(){
      return true;
    }
  }
});

const containerConfig = {
  base: 'mx-0 md:mx-auto',
  padding: 'mx-0 md:mx-auto px-0 sm:px-0 md:px-6 lg:px-8',
  constrained: 'max-w-7xl',
}
</script>

<template>
  <UContainer :ui="props.with_container ? '' : containerConfig">
    <div :class="props.with_container ? 'rounded-lg' : 'drop-shadow-2xl'" class="mt-5 bg-white  shadow-lg  py-4 px-8">
      <div class="flex justify-between items-center">
        <!--LOGO-->
        <div class="brand">
          <h1 class="text-2xl uppercase font-bold">
            <span class="text-violet-950">Bong</span>
            Play
          </h1>
        </div>
        <!--COLLAPSE-->
        <UButton icon="i-heroicons-bars-3" color="violet" @click="handleSidebar"/>
      </div>
    </div>
  </UContainer>
</template>

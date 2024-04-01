<script setup lang="ts">
  import BContainer from "~/components/layouts/BContainer.vue";
  import BNavbar from "~/components/BNavbar.vue";
  import BSmallNav from "~/components/nav/BSmallNav.vue";
  import BSidebar from "~/components/nav/BSidebar.vue";
  import BIMDB from "~/components/utility/BIMDB.vue";



</script>

<template>
  <div class="relative">
    <div class="absolute z-10 w-full">
      <BNavbar class="hidden md:block"/>
      <BSmallNav class="block md:hidden px-3"/>
    </div>

    <HeaderSlider/>



    <BSidebar/>
  </div>
</template>


<style scoped>

</style>
<script setup lang="ts">
import Menu from "~/components/nav/BMenu.vue";
import BAccount from "~/components/nav/BAccount.vue";
import BSmallNav from "~/components/nav/BSmallNav.vue";
import BSidebar from "~/components/nav/BSidebar.vue";

const containerConfig = {
  base: 'mx-0 md:mx-auto',
  padding: 'mx-0 md:mx-auto sm:px-0 px-0 md:px-6 lg:px-8',
  constrained: 'max-w-7xl',
}
</script>

<template>
  <UContainer :ui="containerConfig" class="sticky top-0 z-50">


    <BSmallNav :with_container="false" class="block md:hidden"/>

    <div class="bg-white hidden md:block rounded-lg py-4 px-8  drop-shadow-xl">
      <div class="flex justify-between items-center">
        <!--            MENUS  -->
        <Menu/>
        <!--LOGO-->
        <div class="brand">
          <h1 class="text-2xl uppercase font-bold">
            <span class="text-violet-950">Bong</span>
            Play
          </h1>
        </div>

        <!--              ACCOUNTS-->
        <BAccount/>
      </div>
    </div>

  </UContainer>
</template>

<style scoped>

</style>
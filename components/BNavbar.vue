<template>
  <UContainer>
    <div class="mt-5 bg-white rounded-lg py-4 px-8">
      <div class="flex justify-between items-center">
        <!--            MENUS  -->
        <Menu/>
        <!--LOGO-->
        <div class="brand">
          <h1 class="text-2xl uppercase font-bold">
            <span class="text-purple-950">Bong</span>
            Play
          </h1>
        </div>

        <!--              ACCOUNTS-->
        <BAccount/>
      </div>
    </div>
  </UContainer>
</template>
<script setup lang="ts">
import {BellAlertIcon, Cog6ToothIcon, HeartIcon} from "@heroicons/vue/24/outline";
import BContainer from "~/components/layouts/BContainer.vue";
import Menu from "~/components/nav/BMenu.vue";
import BAccount from "~/components/nav/BAccount.vue";
</script>
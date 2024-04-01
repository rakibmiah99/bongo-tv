<script setup lang="ts">
import Menu from "~/components/nav/BMenu.vue";
import BAccount from "~/components/nav/BAccount.vue";
</script>

<template>
    <UContainer class="sticky top-0">
      <div class="bg-white rounded-lg py-4 px-8">
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
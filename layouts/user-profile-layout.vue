<template>
  <BFixedNav class="hidden shadow-lg z-50  md:block"/>
  <BSmallNav class="block shadow-lg  md:hidden px-3"/>
  <UContainer>
    <div class="py-10 flex justify-center">
      <div class="w-10/12 ">
        <div class="flex">
          <div class="basis-1/4">
            <BUserSidebar class="h-full border-r"/>
          </div>
          <div class="basis-3/4 px-2">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
  <BFooter/>

  <BSidebar/>
</template>
<script setup lang="ts">
import BFixedNav from "~/components/nav/BFixedNav.vue";
import BSmallNav from "~/components/nav/BSmallNav.vue";
import BSidebar from "~/components/nav/BSidebar.vue";
import BFooter from "~/components/BFooter.vue";
import BUserSidebar from "~/components/user/BUserSidebar.vue";
</script>
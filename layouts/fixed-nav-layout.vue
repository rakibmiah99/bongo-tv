<template>
  <BFixedNav class="hidden shadow-lg z-50  md:block"/>
  <BSmallNav class="block shadow-lg  md:hidden px-3"/>
  <slot/>
  <BFooter/>

  <BSidebar/></template>
<script setup lang="ts">
import BFixedNav from "~/components/nav/BFixedNav.vue";
import BSmallNav from "~/components/nav/BSmallNav.vue";
import BSidebar from "~/components/nav/BSidebar.vue";
import BFooter from "~/components/BFooter.vue";
</script>
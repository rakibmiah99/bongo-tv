<template>
  <BFixedNav class="z-50  md:block"/>
  <slot/>
  <BFooter/>

  <BSidebar/></template>
<script setup lang="ts">
import BFixedNav from "~/components/nav/BFixedNav.vue";
import BSmallNav from "~/components/nav/BSmallNav.vue";
import BSidebar from "~/components/nav/BSidebar.vue";
import BFooter from "~/components/BFooter.vue";

</script>
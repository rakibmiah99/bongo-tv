<script setup>
  import {useMenu} from "~/composables/useMenu.ts";
  const {linksStore} = useMenu();
  const ui = {
    after: '',
    base:'lg:px-5 py-2 hover:text-violet-950 cursor-pointer uppercase',
    before: '',
    active: 'font-bold text-violet-950 bg-violet-100'
  }
</script>
<template>
  <div class="menu">
    <UHorizontalNavigation :ui="ui" :links="linksStore" >
      <template #default="{ link }">
        <span class="hover:text-violet-950 hover:after:bg-none relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>
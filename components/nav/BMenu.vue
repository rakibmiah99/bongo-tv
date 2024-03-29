<script setup>

  const links = [
    {
      label: 'Home',
      to: '/',
      active: 'border-none'
    },
    {
      label: 'Movies',
      to: '/'
    },
    {
      label: 'Series',
      to: '/'
    },
    {
      label: 'Kits',
      to: '/'
    }
  ]


  const ui = {
    after: '',
    base:'lg:px-5 py-2 hover:text-violet-950 cursor-pointer uppercase ',
    before: ''
  }
</script>
<template>
  <div class="menu">
    <UHorizontalNavigation :ui="ui" :links="links" >
      <template #default="{ link }">
        <span class="hover:text-violet-950 hover:after:bg-none relative">{{ link.label }}</span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>
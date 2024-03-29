<script setup>
import {useUtility} from "~/composables/useUtility.js";
const {isSidebarOpenStore} = useUtility();
const links = [
  [
    {
      label: 'Home',
      to: '/',
      icon: ''
    },
    {
      label: 'Movies',
      to: '/',
      icon: ''
    }, {
    label: 'Series',
    to: '/',
    icon: ''
  }, {
    label: 'Kits',
    to: '/',
    icon: ''
  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb'
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle'
  },
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
      },
      badge: 100
    }
  ]
]


const ui = {
  wrapper: 'relative',
  after: '',
  base:'hover:text-violet-950 cursor-pointer uppercase ',
  before: '',
  divider: {
    wrapper: {
      base: 'p-2',
    },
  },
}
</script>
<template>
  <USlideover class="md:hidden"  side="right" :ui="{width: 'max-w-[200px]'}" v-model="isSidebarOpenStore">
    <div class="p-4 flex-1">
      <UVerticalNavigation :ui="ui" :links="links" >
        <template #default="{ link }">
          <span class="hover:text-violet-950 relative">{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
    </div>
  </USlideover>
</template>
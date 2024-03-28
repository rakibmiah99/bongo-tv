<script setup lang="ts">
const isOpen = ref(true)
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
  base:'hover:text-purple-950 cursor-pointer uppercase ',
  before: '',
  divider: {
    wrapper: {
      base: 'p-2',
    },
  },
}
</script>

<template>
  <UContainer>
    <div class="mt-5 bg-white rounded-lg py-4 px-8">
      <div class="flex justify-between items-center">
        <!--LOGO-->
        <div class="brand">
          <h1 class="text-2xl uppercase font-bold">
            <span class="text-purple-950">Bong</span>
            Play
          </h1>
        </div>
        <!--COLLAPSE-->
        <UButton icon="i-heroicons-bars-3" color="indigo" @click="isOpen = true"/>
      </div>
    </div>
  </UContainer>



  <USlideover  side="right" :ui="{width: 'max-w-[200px]'}" v-model="isOpen">
    <div class="p-4 flex-1">
      <UVerticalNavigation :ui="ui" :links="links" >
        <template #default="{ link }">
          <span class="hover:text-indigo-950 relative">{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
    </div>
  </USlideover>
</template>

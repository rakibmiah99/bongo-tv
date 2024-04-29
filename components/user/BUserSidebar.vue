<script setup lang="ts">
const route = useRoute()

const links = [
  [
    {
      label: 'Account',
      icon: 'i-heroicons-user-circle',
      to: '/account'
    },
    {
      label: 'Library',
      icon: 'i-heroicons-list-bullet',
      to: '/account/library'
    },
    {
      label: 'Watch History',
      icon: 'i-heroicons-arrow-path',
      to: '/account/history'
    },
    {
      label: 'Package',
      icon: 'i-heroicons-squares-2x2',
      to: '/account/package'
    },
    {
      label: 'Payment History',
      icon: 'i-heroicons-currency-dollar',
      to: '/account/payments'
    }
  ],
  [
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-6-tooth',
      to: '/account/settings'
    },
    {
      label: 'Logout',
      icon: 'i-heroicons-arrow-uturn-left'
    }
  ]
]

const config = {
  base: "px-2 py-3",
  // active: 'hover:bg-violet-500',
  inactive: 'px-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-violet-50 group-hover:text-violet-900 dark:hover:before:bg-violet-800/50'
}
</script>

<template>
  <UVerticalNavigation class="rounded" :links="links" :ui="config"/>
</template>
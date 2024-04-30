<script setup>
  // const {data,signOut} = useAuth();
  // const user = data.value.user;
  const items = [
    [{
      // label: user.name ?? 'ben@example.com',
      label:  'MD Rakib Miah',
      slot: 'account',
      disabled: true
    }], 
    [{
      label: 'Account',
      icon: 'i-heroicons-user-circle',
      to: '/account'
    }],
    [{
      label: 'Library',
      icon: 'i-heroicons-list-bullet',
      to: '/account/library'
    }],
    [{
      label: 'Watch History',
      icon: 'i-heroicons-arrow-path',
      to: '/account/history'
    }],
    [{
      label: 'Payment History',
      icon: 'i-heroicons-currency-dollar',
      to: '/account/payments'
    }],
    [{
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth',
      to: '/account/settings'
    }],
    [{
        label: 'Sign out',
        icon: 'i-heroicons-arrow-uturn-left',
        // click: () => {
        //   signOut({callbackUrl: '/auth'})
        // }
    }]
  ]

</script>
<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <!-- <UAvatar :src="user?.image ?? 'https://avatars.githubusercontent.com/u/739984?v=4'" /> -->

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>
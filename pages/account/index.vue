<template>
  <h1 class="px-4 flex items-center justify-between text-sm">Account Information  <UButton size="xs" color="violet" label="Edit"/></h1>
  <ul role="list" class="mt-3">
    <li class="group/item space-y-1 flex border-b border-1 flex-col p-4 rounded-md">
      <h4 class="text-md font-bold">Full Name</h4>
      <p class="text-sm">{{ user.name }}</p>
    </li>
    <li class="group/item space-y-1 flex border-b border-1 flex-col p-4 rounded-md">
      <h4 class="text-md font-bold">Email</h4>
      <p class="text-sm">{{ user.email }}</p>
    </li>
    <li class="group/item space-y-1 flex border-b border-1 flex-col p-4 rounded-md">
      <h4 class="text-md font-bold">Mobile</h4>
      <p class="text-sm">{{user.mobile}}</p>
    </li>
    <li class="group/item space-y-1 flex border-b border-1 flex-col p-4 rounded-md">
      <h4 class="text-md font-bold">Gender</h4>
      <p class="text-sm">{{ user.gender }}</p>
    </li>
    <li class="group/item space-y-1 flex border-b border-1 flex-col p-4 rounded-md">
      <h4 class="text-md font-bold">Date Of Birth</h4>
      <p class="text-msm">{{user.dob}}</p>
    </li>

  </ul>
</template>
<script setup lang="ts">
  import {definePageMeta} from "#imports";
  definePageMeta({
    // layout: 'user-profile-layout'
    layout: 'user-profile-layout'
  });

  const {data} = useAuth();
  const user = data.value.user;
  console.log('a', user)

</script>
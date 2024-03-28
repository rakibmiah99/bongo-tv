<script setup>
  defineProps(['title', 'rating'])
</script>

<template>
  <div class="rating flex items-center">
    <UBadge class="rounded-none text-black" color="yellow" variant="solid">{{title ?? "IMDB"}}</UBadge>
    <span class="ms-2">{{rating}}</span>
  </div>
</template>
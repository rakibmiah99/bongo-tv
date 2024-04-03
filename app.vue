<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
/*const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference =  'light'
  }
})

  isDark();*/
useHead({
  title: 'Bong Play',
  style: {
    rel: "text/css",
    type: "stylesheet",
    href: 'https://cdn.plyr.io/3.7.8/plyr.css'
  },
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/hls.js'
    },
    {
      src: 'https://cdn.plyr.io/3.7.8/plyr.js'
    }
  ]
})
</script>
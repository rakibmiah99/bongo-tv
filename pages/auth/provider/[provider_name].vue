<template>
    <ServerProvider/>
</template>
<script setup>
    const route = useRoute();
    const provider = route.params.provider_name;
</script>
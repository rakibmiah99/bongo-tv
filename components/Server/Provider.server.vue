<template>
    <h1>Hello I am server side componentsdd</h1>
</template>
<script setup>
    const {data} = useAuth();
    data.value.token = "1122";
    console.log('p_data', data.value)
</script>
<template>
    <UButton @click="actionToSignin">Github</UButton>
</template>
<script setup>
    const {signIn} = useAuth();
    const actionToSignin = async () => {
        await signIn('github', {callbackUrl: '/'});
    }
</script>
<template>
    <NuxtLayout name="header">
    <div class="container">
        <p class="" @click="goBack">回到上一頁</p>
        <RouterLink to="/" class="hover:text-emerald-500">回到首頁</RouterLink>
    </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function goBack() { 
    router.go(-1);
}
</script>

<style scoped>

</style>
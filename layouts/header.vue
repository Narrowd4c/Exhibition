<template>
    <div class="container p-10 mx-auto">
        <div class="text-2xl">ColorMode</div>

        <select class="dark:bg-black dark:border-2 px-4 py-px" v-model="colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()

</script>

<style scoped>

</style>
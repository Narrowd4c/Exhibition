<template>
    <div class="container mx-auto p-10">
        <select
            class="border-2 px-4 py-px dark:bg-black"
            v-model="colorMode.preference"
        >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style scoped></style>

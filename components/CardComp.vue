<template>
    <div class="max-w-2xl rounded-md border p-4 backdrop-blur-xl">
        <p class="">表演者編號: {{ id }}</p>
        <h3 class="py-4 text-3xl font-bold">
            姓名: <span class="tracking-widest">{{ player }}</span>
        </h3>
        <p>表演曲目: {{ piece }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    id: {
        type: Number,
        default: -1,
    },
    player: {
        type: String,
        default: 'Default Player',
    },
    piece: {
        type: String,
        default: '預設曲目',
    },
})
</script>
<style scoped></style>

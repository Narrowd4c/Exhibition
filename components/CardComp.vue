<template>
    <div
        class="max-w-2xl rounded-md border p-4 backdrop-blur-xl hover:drop-shadow"
    >
        <div class="justify-between md:flex">
            <p>表演序號: {{ sequence }}</p>
            <p v-show="date !== -1" class="">表演者編號: {{ date }}</p>
        </div>
        <h3 class="py-4 text-3xl font-bold dark:text-emerald-400">
            姓名: <span class="tracking-widest">{{ player }}</span>
        </h3>
        <p>表演曲目: {{ piece }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    date: {
        type: Number,
        default: -1,
    },
    sequence: {
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

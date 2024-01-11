<template>
    <div class="container mx-auto p-10">
        <div class="flex">
            <h1 class="text-4xl tracking-widest font-black hover:text-emerald-400"><RouterLink to="/">MusicBox</RouterLink></h1>
            <ul class="ms-auto flex gap-4">
                <li title="清單模式">
                    <RouterLink to="/"
                        ><ListIcon class="dark:fill-white hover:fill-emerald-400"
                    /></RouterLink>
                </li>
                <li title="圖片模式">
                    <RouterLink to="/book"
                        ><BookIcon class="dark:fill-white hover:fill-emerald-400"
                    /></RouterLink>
                </li>
            </ul>
            <select
                class="ms-4 border-2 px-4 py-0 tracking-tighter dark:bg-black"
                v-model="colorMode.preference"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import BookIcon from '../components/icon/MenuBookIcon.vue'
import ListIcon from '../components/icon/ListIcon.vue'

const colorMode = useColorMode()
</script>

<style scoped></style>

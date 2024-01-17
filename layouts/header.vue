<template>
    <div class="container mx-auto p-10">
        <div class="flex">
            <h1
                class="text-4xl font-black tracking-widest hover:text-emerald-400"
            >
                <RouterLink to="/">MusicBox</RouterLink>
            </h1>
            <ul class="ms-auto flex items-center gap-4">
                <li title="清單模式">
                    <RouterLink to="/"
                        ><ListIcon
                            class="hover:fill-emerald-400 dark:fill-white"
                    /></RouterLink>
                </li>
                <li title="圖片模式">
                    <RouterLink to="/book"
                        ><BookIcon
                            class="hover:fill-emerald-400 dark:fill-white"
                    /></RouterLink>
                </li>
                <li title="切換主題色" class="h-6">
                    <button
                        @click="colorMode.preference = 'light'"
                        v-if="colorMode.preference === 'dark'"
                    >
                        <SunnyIcon class="fill-white hover:fill-yellow-600" />
                    </button>
                    <button @click="colorMode.preference = 'dark'" v-else>
                        <SunnyIcon class="fill-black hover:fill-yellow-600" />
                    </button>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import BookIcon from '../components/icon/MenuBookIcon.vue'
import SunnyIcon from '../components/icon/sunnyIcon.vue'
import ListIcon from '../components/icon/ListIcon.vue'

const colorMode = useColorMode()
</script>

<style scoped></style>

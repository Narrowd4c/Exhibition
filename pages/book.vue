<template>
    <div class="my-10 text4xl w-fit" @click="toggle = !toggle">
        <ul class="px-2 group grid grid-cols-3 grid-rows-3 transition-all gap-px hover:scale-110 hover:cursor-pointer" aria-hidden="true">
            <li v-for="i in 9" class="group-hover:bg-emerald-400  w-2 bg-black aspect-square"></li>
        </ul>
    </div>
    <div
        class="container snap-both snap-mandatory overflow-y-clip overflow-x-scroll"
    >
        <div :class="{'flex-wrap gap-y-4 [&>*]:px-2':!toggle, 'gap-x-4':toggle}" class="flex">
            <div v-for="(player, i) in quoteImage1.images" :key="i" :class="{'w-full':toggle, 'w-1/3':!toggle}" class="snap-always  flex-shrink-0 snap-center" >
                <img :src="player" alt="playerImage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuoteImage1Store } from '../stores/quoteImage1'

const quoteImage1 = useQuoteImage1Store()

const toggle = ref<Boolean>(true)
</script>

<style scoped></style>

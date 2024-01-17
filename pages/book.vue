<template>
    <div
        class="text4xl my-10 w-fit"
        @click="
            () => {
                toggle = !toggle
                toggle ? '' : (xWidth = 0)
            }
        "
        aria-hidden="true"
    >
        <ul
            class="group grid grid-cols-3 grid-rows-3 gap-px px-2 transition-transform hover:scale-110 hover:cursor-pointer"
        >
            <li
                v-for="i in 9"
                class="aspect-square w-2 bg-black group-hover:bg-emerald-400 dark:bg-white"
            ></li>
        </ul>
    </div>
    <div
        class="container relative snap-both snap-mandatory overflow-x-hidden overflow-y-clip"
    >
        <div
            :class="{
                'flex-wrap gap-y-4 [&>*]:px-2': !toggle,
                'transition-transform duration-1000': toggle,
            }"
            class="flex"
            :style="`transform: translateX(calc(${xWidth}%));`"
        >
            <div
                v-for="(player, i) in quoteImage1.images"
                :key="i"
                :class="{ 'w-full': toggle, 'w-1/2 lg:w-1/3': !toggle }"
                class="flex-shrink-0 snap-center snap-always px-4"
            >
                <img :src="player" alt="playerImage" @click="selectPlayer(i)" />
            </div>
        </div>
        <button
            class="absolute left-4 top-1/2 z-10 -translate-y-1/2 drop-shadow-[0px_0px_4px_rgba(255,255,255)]"
            @click="xWidth += 100"
            :disabled="xWidth == 0"
            v-show="toggle"
        >
            <ArrowBack
                :class="xWidth == 0 ? 'fill-gray-300' : 'fill-emerald-500'"
            />
        </button>
        <button
            class="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 drop-shadow-[0px_0px_4px_rgba(255,255,255)]"
            @click="xWidth -= 100"
            :disabled="xWidth == -totalWidth"
            v-show="toggle"
        >
            <ArrowForward
                :class="
                    xWidth == -totalWidth ? 'fill-gray-300' : 'fill-emerald-500'
                "
            />
        </button>
    </div>
</template>

<script setup lang="ts">
import { useQuoteImage1Store } from '../stores/quoteImage1'
import ArrowBack from '../components/icon/arrowBack.vue'
import ArrowForward from '../components/icon/arrowForward.vue'

const totalWidth = computed(() => {
    return 100 * (Object.keys(quoteImage1.images).length - 1)
})
const xWidth = ref<number>(0)
const toggle = ref<Boolean>(true)
const quoteImage1 = useQuoteImage1Store()

function selectPlayer(idx: number) {
    toggle.value ? '' : (toggle.value = true)
    xWidth.value = -100 * idx
}
</script>

<style scoped></style>

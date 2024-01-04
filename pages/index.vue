<template>
    <main class="container py-10">
        <form
            class="relative mb-10 flex items-center gap-4 [&>*]:dark:bg-gray-800"
        >
            <input
                class="peer border-2 border-green-200 px-2 py-px text-black focus-visible:outline-0"
                type="text"
                id="search-player"
                v-model.lazy="playerName"
                placeholder=" "
            />
            <label
                class="absolute ms-2 -translate-y-[80%] bg-white text-sm font-bold tracking-widest transition-transform duration-300 peer-placeholder-shown:-translate-y-[0%] peer-focus:-translate-y-[80%]"
                for="search-player"
                >搜尋姓名</label
            >
            <div class="relative"></div>
        </form>
        <ul class="-mx-4 flex flex-wrap gap-y-4">
            <li
                class="w-full px-4 md:w-6/12"
                v-for="{ id, player, piece } in filterData"
                :key="id + player"
            >
                <CardComp :id="id" :player="player" :piece="piece" />
            </li>
        </ul>
    </main>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuote1Store } from '../stores/quote1'

const playerStore = useQuote1Store()

const playerName = ref<string>('')

interface Quote {
    id: number
    player: string
    piece: string
}

// wip  轉為使用 import 的方式 ref: ../stores/quote1.ts

const filterData = computed(() => {
    return playerName.value
        ? playerStore.player.filter(({ player }: Quote) => {
              return player.match(playerName.value)
          })
        : playerStore.player
})
</script>

<template>
    <main class="container py-10">
        <form
            @submit.prevent
            class="relative mb-10 flex items-center gap-4 [&>*]:dark:bg-gray-800"
        >
            <input
                class="peer rounded-lg border-2 border-green-200 px-4 py-2 focus-visible:outline-0"
                type="text"
                id="search-player"
                v-model="playerName"
                placeholder=""
            />
            <label
                class="absolute ms-4 -translate-y-[80%] bg-white text-xl font-bold tracking-widest transition-transform duration-300 peer-placeholder-shown:-translate-y-[0%] peer-focus:-translate-y-[80%]"
                for="search-player"
                >搜尋姓名</label
            >
            <div class="relative"></div>
        </form>
        <ul class="-mx-4 flex flex-wrap gap-y-4">
            <li
                class="w-full px-4 md:w-6/12"
                v-for="{ date, player, piece, sequence } in filterData"
                :key="date + player"
            >
                <CardComp
                    :date="date"
                    :player="player"
                    :piece="piece"
                    :sequence="sequence"
                />
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
    date?: number
    sequence: number
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

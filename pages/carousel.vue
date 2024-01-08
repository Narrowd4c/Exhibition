<template>
    <div
        class="container snap-both snap-mandatory overflow-y-clip overflow-x-scroll"
    >
        <div class="flex">
            <div v-for="(player, i) in quoteImage1.images" :key="i" class=" snap-always scroll-pl-4 w-full flex-shrink-0 snap-center" >
                <img :src="player" alt="playerImage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuoteImage1Store } from '../stores/quoteImage1'

const quoteImage1 = useQuoteImage1Store()
</script>

<style scoped></style>

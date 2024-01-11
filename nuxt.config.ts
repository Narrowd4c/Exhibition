// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],
    vite: {
        base: '/exhibition/',
    },
    colorMode: {
        preference: 'dark',
        classPrefix: '',
        classSuffix: '',
    },
})
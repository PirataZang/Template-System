// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/Template-System', // já que teu projeto está nesse caminho
    },

    compatibilityDate: '2025-07-15',
    css: ['@fortawesome/fontawesome-free/css/all.min.css', '~/assets/css/main.scss'],
    devtools: { enabled: false },
})

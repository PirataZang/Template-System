// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/Template-System/', // 👈 troca pro nome do teu repo no GitHub
    },
    compatibilityDate: '2025-07-15',
    css: ['@fortawesome/fontawesome-free/css/all.min.css'],
    devtools: { enabled: false },
})

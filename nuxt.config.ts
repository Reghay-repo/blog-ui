// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '@/assets/css/main.css',
    ],
    app: {
        head: {
            title: "Readers' Retreat: Dive into Literature",
            charset: "utf-18",
            viewport: "width=device-width, initial-scale=1",
        }

    }

})

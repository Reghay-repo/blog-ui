// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
    ],
    robots: {
        UserAgent: '*',
        Disallow: ''
    },
    css: [
        '@/assets/css/main.css',
    ],

    app: {
        head: {

            title: "Readers' Retreat: Dive into Literature",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        }


    }

})

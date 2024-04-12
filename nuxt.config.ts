// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', "@nuxt/image", '@nuxt/image',],
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
    },
    image: {
        format: ['webp'],
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536
        },
    }

})
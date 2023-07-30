// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        [
            '@nuxtjs/color-mode',
            {
                classSuffix: '',
                preference: 'system',
                fallback: 'dark',
            }
        ],
        [
            '@vee-validate/nuxt',
            {
                autoImports: true,
            },
        ],
    ],
})

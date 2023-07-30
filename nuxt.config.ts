// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        ["@nuxtjs/eslint-module", {
            failOnError: true,
            "overrideConfig": {
                rules: {
                    "vue/no-multiple-template-root": "off",
                    // "vue/no-undef-properties": {
                    //     "ignores": [
                    //         "useRoute",
                    //         "ref",
                    //         "navigateTo"
                    //     ]
                    // }
                }
                // 'useRoute',
                // 'ref',
                // 'navigateTo',
            }
        }],
        "@nuxtjs/tailwindcss",
        ["@nuxtjs/color-mode", {
            classSuffix: "",
            preference: "system",
            fallback: "dark"
        }],
        ["@vee-validate/nuxt", {
            autoImports: true
        }]
    ]
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
  modules: ["@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/font-awesome.ts" }],
});

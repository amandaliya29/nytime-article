// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Gelasio:ital,wght@0,400..700;1,400..700&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
});

import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,

  target: "static",

  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["assets/main.less"],

  plugins: [],
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://paolovernetti.github.io/",
    gzip: true,
  },
  build: {},
});

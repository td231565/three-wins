// import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import { repositoryName } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: true,

  app: {
    head: {
      title: "Prismic + Nuxt multi-page example",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Prismic + Nuxt multi-page example",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  css: [
    "~/styles/global.css",
    "@fontsource/inter/400.css",
    "@fontsource/inter/500.css",
    "@fontsource/inter/600.css",
    "@fontsource/inter/700.css",
    "@fontsource/inter/800.css",
    "@fontsource/inter/900.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  modules: ["@nuxtjs/prismic", "@nuxtjs/tailwindcss", "shadcn-nuxt"],

  prismic: {
    endpoint: repositoryName,
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "page-home",
          path: "/",
        },
      ],
      accessToken: import.meta.env.NUXT_PRISMIC,
    },
  },

  // tailwindcss: {
  //   config: {
  //     content: [
  //       "./app/**/*.{js,ts,vue}",
  //       "./slices/**/*.{js,ts,vue}",
  //       "./components/**/*.{js,ts,vue}",
  //     ],
  //     theme: {
  //       fontFamily: {
  //         sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  //       },
  //     },
  //     plugins: [tailwindAspectRatio],
  //   },
  //   quiet: true,
  // },

  shadcn: {
    //Prefix for all the imported component
    prefix: "",
    componentDir: "./components/ui",
  },

  runtimeConfig: {
    public: {
      GOOGLE_API_KEY: import.meta.env.NUXT_GOOGLE,
      SPREAD_SHEET_ID: import.meta.env.NUXT_SHEET_ID,
    },
  },
});

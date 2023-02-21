import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// import ElementPlus from "unplugin-element-plus/vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.vue",
        "./Link": "./src/components/Link.vue",
        "./Navbar": "./src/components/Navbar.vue",
        "./Card": "./src/components/Card.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  build: {
    minify: false,
    target: "esnext",
    cssCodeSplit: false,
  },
});

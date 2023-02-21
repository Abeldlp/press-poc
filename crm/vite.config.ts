import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import ElementPlus from "unplugin-element-plus/vite";

export default defineConfig({
  plugins: [
    ElementPlus({}),
    cssInjectedByJsPlugin(),
    vue(),
    federation({
      name: "crm",
      filename: "remoteEntry.js",
      remotes: {
        ui: "http://localhost:3003/assets/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});

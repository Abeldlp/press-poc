import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "crm",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.vue",
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

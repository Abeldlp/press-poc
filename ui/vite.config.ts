import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.vue",
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
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "presspage",
      filename: "remoteEntry.js",
      remotes: {
        mi: "http://localhost:3001/assets/remoteEntry.js",
        crm: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});

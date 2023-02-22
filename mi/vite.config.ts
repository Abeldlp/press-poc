import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "mi",
      filename: "remoteEntry.js",
      remotes: {
        ui: "http://localhost:3003/assets/remoteEntry.js",
      },
      exposes: {
        "./App": "./src/App.vue",
        "./Clients": "./src/pages/Clients.vue",
        "./Invoices": "./src/pages/Invoices.vue",
        "./routes": "./src/routes/main",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  build: {
    minify: false,
    target: "esnext",
    cssCodeSplit: false,
  },
});

/// <reference types="vitest" />
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './src/test/setup.ts',
  },

  preview: {
    port: 8080,
    strictPort: true,
    proxy: {
      "/api": {
        target: "https://www.buda.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "/api/v2"),
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://www.buda.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "/api/v2"),
      },
    },
    port: 8080,
    strictPort: true,
    host: true,
  },
});

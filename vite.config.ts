import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/component", import.meta.url)),
      "@providers": fileURLToPath(new URL("./src/providers", import.meta.url)),
    },
  },
})

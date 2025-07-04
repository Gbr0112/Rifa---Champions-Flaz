import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  root: "client", // 👈 aponta a raiz para a pasta client
  plugins: [react()],
  publicDir: "../attached_assets", // 👈 pasta de assets fora de client
  build: {
    outDir: "../dist", // 👈 saída do build volta para a raiz
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"), // 👈 usa o index da client
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
})

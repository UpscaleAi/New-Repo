import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // ✅ No tailwindcss() here!
  server: {
    port: 5173,
  },
});

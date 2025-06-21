import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: ["2c4f-2409-40d6-10c4-2ae3-b00b-5772-58bd-7446.ngrok-free.app","auromapp.com","localhost","127.0.0.1"],
  },
  // Static file serving for .well-known directory
  publicDir: "public",
});


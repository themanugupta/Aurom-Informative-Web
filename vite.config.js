import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "7fd8-2409-40d6-10c4-29b4-dd06-c300-d10a-de8d.ngrok-free.app",
    ],
  },
});

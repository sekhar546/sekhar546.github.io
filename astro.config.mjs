import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sekhar546.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
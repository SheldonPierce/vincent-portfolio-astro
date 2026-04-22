import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://SheldonPierce.github.io",
  base: isProd ? "/vincent-portfolio" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});

import process from "node:process";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(`v${process.env.npm_package_version}`),
    __APP_MODE__: JSON.stringify(mode)
  }
}));

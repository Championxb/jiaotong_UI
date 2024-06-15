import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    // 开发时 解决这些commonjs包转成esm包
    include: [
      "@jiaminghi/c-render",
      "@jiaminghi/c-render/lib/plugin/util",
      "@jiaminghi/charts/lib/util/index",
      "@jiaminghi/charts/lib/util",
      "@jiaminghi/charts/lib/extend/index",
      "@jiaminghi/charts",
      "@jiaminghi/color",
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import  "@/assets/css/variable.scss";`,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});

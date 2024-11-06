import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          "vue",
          { "vue-router": ["useRouter", "useRoute"] },
          { pinia: [["defineStore"], ["storeToRefs"]] },
          {
            "@utils/message": [["default", "msg"]],
          },
        ],

        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),

      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            prefix: "Icon",
            enabledCollections: ["ep", "ic"],
          }),

          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
      }),

      Icons({
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
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
    server: {
      host: true,
      port: 9527,
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          timeout: 5000,
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
  };
});

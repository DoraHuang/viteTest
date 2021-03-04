import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, path } from "path";
function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "/@": resolve(__dirname, "./src"),
    },
  },
  base: "/",
  server: {
    port: 3000,
  },
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
  },
  optimizeDeps: {
    entries: [],
    exclude: [],
    include: ["lodash", "@ant-design/icons-vue", "echarts/dist/echarts"],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "./src/theme/theme.less";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "@layui/unplugin-vue-components/vite";
import { LayuiVueResolver } from '@layui/unplugin-vue-components/resolvers'
import { resolve } from "path";

const excludeComponents = ['LightIcon','DarkIcon']

export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  build: {
    // 启用代码分割
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['@layui/layui-vue', 'bootstrap'],
          charts: ['echarts', 'chart.js']
        }
      }
    },
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  plugins: [
    AutoImport({
      resolvers: [
        LayuiVueResolver(),
      ],
    }),
    Components({
      resolvers: [
        LayuiVueResolver({
          resolveIcons: true,
          exclude: excludeComponents
        }),
      ],
    }),
    vue(),
  ],
});
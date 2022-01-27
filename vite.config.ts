const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    base: './', // 打包路径
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "/src"),
        }
    },
    server: {
        // port: 4000,
        // open: true,
        proxy: {
            // 第一个代理 /api/mobile
            '/api': {
                target: 'https://github.com/cll123456/vue3-ts-mobile',
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
    },
})
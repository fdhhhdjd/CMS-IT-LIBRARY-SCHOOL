import { fileURLToPath, URL } from 'node:url'

// ** Vite Imports
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { CONFIG } from '@/config'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        Pages({
            onRoutesGenerated: routes => [...routes],
        }),
        Layouts(),
        Components({
            resolvers: [ElementPlusResolver()],
            dirs: ['src/components', 'src/views', 'src/layouts/components'],
            dts: true,
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dirs: ['src/store'],
            imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n', 'pinia'],
            vueTemplate: true,
        }),
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            include: [
                fileURLToPath(new URL('./src/plugins/i18n/locales/**', import.meta.url)),
            ],
        }),
        DefineOptions(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
        },
    },
    build: {
        sourcemap: false,
        chunkSizeWarningLimit: 5000,
    },
    optimizeDeps: {
        entries: [
            './src/**/*.vue',
        ],
    },
    server: {
        proxy: {
            '/manager': {
                target: 'http://localhost:8080/manager',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/manager/, ''),
            },
        },
    },
})

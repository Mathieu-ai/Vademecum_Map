import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        publicPath: '/',
        plugins: [
            vue(),
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
        ],
        preview: {
            port: 3000
        },
        server: {
            port: 8080
          },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ]
    },
    */}

})
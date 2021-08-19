import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import babel from '@vue/babel-plugin-jsx'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), babel({}), vueJsx({})],
  server: {
    port: 8888,
    proxy: {
      api: {
        target: 'http://139.159.141.248:8081',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  }
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import unocss from 'unocss/vite'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isLib = command === 'build'

  return {
    plugins: isLib
      ? [
          vue(),
          dts({
            tsconfigPath: './tsconfig.build.json',
          }),
          unocss(),
        ]
      : [vue(), vueDevTools(), unocss()],
    build: isLib
      ? {
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'VueLive2dWidget',
            fileName: 'index',
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
            },
          },
          cssCodeSplit: true, // 必须保留！
        }
      : undefined,
    publicDir: isLib ? false : 'dev/public',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})

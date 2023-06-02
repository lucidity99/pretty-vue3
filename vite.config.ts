import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import pkg from './package.json'
import dayjs from 'dayjs'
const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default (mode) => {
  return defineConfig({
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag === 'iconify-icon'
          }
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver()]
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver({
            importStyle: mode === 'development' ? false : 'sass'
          })
        ]
      }),
      Icons({
        autoInstall: true
      })
    ],

    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    }
  })
}

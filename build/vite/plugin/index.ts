import type { Plugin, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configCompressPlugin } from './compress';
export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;
  const vitePlugins: (Plugin | Plugin[] | PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    VueSetupExtend(),
  ];
  // 以下插件只在生产环境中工作
  if (isBuild) {
    vitePlugins.push(
      configCompressPlugin(
        VITE_BUILD_COMPRESS,
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      )
    );
  }
  return vitePlugins;
}

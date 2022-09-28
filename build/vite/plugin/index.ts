import type { Plugin, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configCompressPlugin } from './compress';
import { registerGlobComp } from './unplugin-components';
import { createSvgIconsPlugin } from './svg-icons';
import { splitVendorChunkPlugin } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;
  const vitePlugins: (Plugin | Plugin[] | PluginOption | PluginOption[])[] = [
    vue({
      reactivityTransform: true, // 开启ref转换
    }),
    vueJsx(),
    VueSetupExtend(),
  ];

  // 自动注册 src/components 下的组件
  vitePlugins.push(registerGlobComp());

  // 注册svg图标依赖
  vitePlugins.push(createSvgIconsPlugin());

  // 最小化分割
  vitePlugins.push(splitVendorChunkPlugin());

  // 打包分析
  vitePlugins.push(
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true,
    })
  );

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

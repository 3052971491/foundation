import type { Plugin, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

export function createVitePlugins(viteEnv: any, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[] | PluginOption | PluginOption[])[] = [
    vue(),
  ];
  // 以下插件只在生产环境中工作
  if (isBuild) {
    //
  }
  return vitePlugins;
}

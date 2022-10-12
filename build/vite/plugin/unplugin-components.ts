import type { PluginOption } from 'vite';
import componentsPlugin from 'unplugin-vue-components/vite';
// import {
//   ElementPlusResolver,
//   AntDesignVueResolver,
//   VantResolver,
//   HeadlessUiResolver,
//   ElementUiResolver
// } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export function registerGlobComp(): PluginOption | PluginOption[] {
  const plugins: PluginOption[] = [];

  plugins.push(
    componentsPlugin({
      // 要搜索组件的目录的相对路径
      dirs: ['src/components'],
      // 自定义文件名的路径
      dts: 'src/components/registerGlobComp.d.ts',
      // 搜索子目录
      deep: true,
      // 自定义组件的解析器
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
    })
  );

  return plugins;
}

import type { PluginOption } from 'vite';
import { createSvgIconsPlugin as plugin } from 'vite-plugin-svg-icons';
import path from 'path';

function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir);
}

// 预加载 在项目运行时就生成所有图标,只需操作一次 dom
// 高性能 内置缓存,仅当文件被修改时才会重新生成
export function createSvgIconsPlugin(): PluginOption | PluginOption[] {
  const plugins: PluginOption[] = [];

  plugins.push(
    plugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    })
  );

  return plugins;
}

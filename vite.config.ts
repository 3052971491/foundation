import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import path from 'path';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin/index';
import { OUTPUT_DIR } from './build/constant';
import { createProxy } from './build/vite/proxy';

function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } =
    viteEnv;
  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // server: {
    //   https: true,
    //   // Listening on all local IPs
    //   host: true,
    //   port: VITE_PORT,
    //   // Load proxy configuration from .env
    //   proxy: createProxy(VITE_PROXY),
    // },
    build: {
      minify: 'esbuild',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        keep_classnames: true,
      },
      //构建后是否生成 source map 文件
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      //启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        'pinia',
        'vue-i18n',
        'lodash-es',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
      exclude: [],
    },
  };
});

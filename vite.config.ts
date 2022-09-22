import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import path from 'path';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin/index';
import { OUTPUT_DIR } from './build/constant';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  return {
    base: './',
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '/@/': path.resolve(__dirname, 'src'),
      },
    },
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
      chunkSizeWarningLimit: 2000,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
});

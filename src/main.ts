import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import './styles/index.less';
import App from './App.vue';
import { setupStore } from '/@/stores/index';
import { setupI18n } from '/@/locales/setupI18n';
import { initAppConfigStore } from '/@/utils/app/index';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
async function bootstrap() {
  const app = createApp(App);
  // 初始化store
  setupStore(app);

  // 初始化内部系统配置
  initAppConfigStore();

  // 配置多语言, 语言文件可能从服务器端获取
  await setupI18n(app);

  // 配置路由
  setupRouter(app);

  // 路由守卫
  setupRouterGuard(router);

  app.mount('#app');
}

bootstrap();

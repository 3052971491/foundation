import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import './styles/index.less';
import App from './App.vue';
import { setupStore } from '/@/stores/index';
import { setupI18n } from '/@/locales/setupI18n';
async function bootstrap() {
  const app = createApp(App);
  // 配置 store
  setupStore(app);
  // 配置多语言, 语言文件可能从服务器端获取
  await setupI18n(app);
  app.mount('#app');
}

bootstrap();

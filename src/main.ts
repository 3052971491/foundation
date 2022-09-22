import { createApp } from 'vue';
import './styles/index.less';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);
  app.mount('#app');
}

bootstrap();

import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)
  app.mount('#app')
}

bootstrap()

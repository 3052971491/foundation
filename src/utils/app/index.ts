import { useLocaleStore } from '/@/stores/modules/locale';
export function initAppConfigStore() {
  const localeStore = useLocaleStore();
  // 初始化多语言
  localeStore.initLocale();
}

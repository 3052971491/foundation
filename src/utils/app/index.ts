import { useLocaleStore } from '/@/stores/modules/locale';
import { useAppSetting } from '/@/hooks/setting/useAppSetting';

export function initAppConfigStore() {
  const localeStore = useLocaleStore();

  const { setThemeColor, setDarkMode, getThemeColor, getDarkMode } =
    useAppSetting();
  // 初始化主题色
  setThemeColor(getThemeColor.value);
  // 初始化主题
  setDarkMode(getDarkMode.value);
  // 初始化多语言
  localeStore.initLocale();
}

import { computed } from 'vue';
import { ThemeEnum } from '/@/enums/appEnum';
import { useAppStore } from '/@/stores/modules/app';
import { updateDarkTheme, updatePrimaryTheme } from '../../utils/theme';

export function useAppSetting() {
  const appStore = useAppStore();
  /** 获取页面加载装填 */
  const getPageLoading = computed(() => appStore.getPageLoading);
  /** 获取系统主题色 */
  const getThemeColor = computed(() => appStore.getProjectConfig.themeColor);
  /** 白天/暗黑模式 */
  const getDarkMode = computed(() => appStore.getDarkMode);
  /** 设置主题色 */
  function setThemeColor(color: string) {
    appStore.setProjectConfig({ themeColor: color });
    updatePrimaryTheme(color);
  }
  /** 设置白天/暗黑模式 */
  function setDarkMode(mode: ThemeEnum) {
    appStore.setDarkMode(mode);
    updateDarkTheme(mode);
  }
  return {
    getPageLoading,
    getThemeColor,
    setThemeColor,
    getDarkMode,
    setDarkMode,
  };
}

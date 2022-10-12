import { ThemeEnum } from '/@/enums/appEnum';
import { ProjectConfig } from '/#/config';
import { defineStore } from 'pinia';
import { store } from '/@/stores';
import { APP_DARK_MODE_KEY_ } from '/@/enums/cacheEnum';
import { darkMode, primaryColor } from '/@/settings/projectSetting';
/** 系统配置 */
interface AppState {
  /** 暗黑模式 */
  darkMode?: ThemeEnum;
  /** 页面加载状态 */
  pageLoading: boolean;
  /** 项目配置 */
  projectConfig: ProjectConfig | null;
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      darkMode: undefined,
      pageLoading: false,
      projectConfig: {
        themeColor: primaryColor,
      },
    };
  },
  getters: {
    /** 获取页面加载状态 */
    getPageLoading(): boolean {
      return this.pageLoading;
    },
    /** 获取暗黑模式 */
    getDarkMode(): ThemeEnum {
      return (
        this.darkMode ||
        (localStorage.getItem(APP_DARK_MODE_KEY_) as ThemeEnum) ||
        darkMode
      );
    },
    /** 获取项目配置 */
    getProjectConfig(): ProjectConfig {
      return (
        this.projectConfig || ({ themeColor: primaryColor } as ProjectConfig)
      );
    },
  },
  actions: {
    /** 设置页面加载状态 */
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
    /** 设置暗黑模式 */
    setDarkMode(mode: ThemeEnum): void {
      this.darkMode = mode;
      localStorage.setItem(APP_DARK_MODE_KEY_, mode);
    },
    /** 设置项目配置 */
    setProjectConfig(config: ProjectConfig): void {
      this.projectConfig = { ...(this.projectConfig || {}), ...config };
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}

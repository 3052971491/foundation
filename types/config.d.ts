import { LocalEnum } from '/@/enums/localEnum';

/** 语言配置 */
export interface LocaleSetting {
  showPicker: boolean;
  /** 当前语言 */
  locale: LocalEnum;
  /** 默认语言 */
  fallback: LocalEnum;
  // 可用语言列表
  availableLocales: LocalEnum[];
}

/** 项目配置  */
export interface ProjectConfig {
  themeColor: string;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}

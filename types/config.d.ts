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

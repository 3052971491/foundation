import type { ProjectConfig } from '/#/config';
import { ThemeEnum } from '/@/enums/appEnum';
export const darkMode = ThemeEnum.LIGHT;
export const primaryColor = '#0960bd';
const setting: ProjectConfig = {
  themeColor: primaryColor,
};
/** 系统主题 */
export const APP_PRESET_COLOR_LIST: string[] = [
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
];
export default setting;

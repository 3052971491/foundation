import type { LocaleSetting } from '/#/config';
import { LocalEnum } from '/@/enums/localEnum';

export const localeSetting: LocaleSetting = {
  showPicker: false,
  locale: LocalEnum.ZH_CN,
  fallback: LocalEnum.ZH_CN,
  availableLocales: [LocalEnum.ZH_CN, LocalEnum.EN_US],
};

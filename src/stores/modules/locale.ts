import type { LocaleSetting } from '/#/config';
import { LocalEnum } from '/@/enums/localEnum';
import { defineStore } from 'pinia';
import { store } from '/@/stores';
import { localeSetting } from '/@/settings/localeSetting';
interface LocaleState {
  localInfo: LocaleSetting;
}

export const useLocaleStore = defineStore('locale', {
  state: (): LocaleState => {
    return {
      localInfo: localeSetting,
    };
  },
  getters: {
    getShowPicker(): boolean {
      return !!this.localInfo?.showPicker;
    },
    /** 获取当前语言 */
    getLocale(): LocalEnum {
      return this.localInfo?.locale ?? localeSetting.fallback;
    },
    getAvailableLocales(): Array<LocalEnum> {
      return this.localInfo?.availableLocales ?? [];
    },
  },
  actions: {
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
    },
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      });
    },
  },
});

export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}

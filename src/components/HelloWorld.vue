<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useLocale } from '/@/locales/useLocale';
import { LocalEnum } from '/@/enums/localEnum';
import { useI18n } from '/@/hooks/web/useI18n';

import { useAppSetting } from '/@/hooks/setting/useAppSetting';
import { ThemeEnum } from '/@/enums/appEnum';

import { getUserInfo } from '/@/api/demo/account';

const { getLocale, changeLocale } = useLocale();
const { t } = useI18n();

function handleChangeLocale() {
  changeLocale(
    getLocale.value === LocalEnum.ZH_CN ? LocalEnum.EN_US : LocalEnum.ZH_CN
  );
}

const { setThemeColor, setDarkMode, getThemeColor, getDarkMode } =
  useAppSetting();
const systemColor = ref(getThemeColor.value);

function handleChangeColor(e) {
  systemColor.value = e.target.value;
  setThemeColor(e.target.value);
}

const dark = ref(getDarkMode.value == ThemeEnum.DARK ? true : false);
function handleChangeDark(checked) {
  setDarkMode(checked ? ThemeEnum.DARK : ThemeEnum.LIGHT);
}

function fetch() {
  getUserInfo().then((res) => {
    console.log(res);
  });
}
onMounted(() => {
  fetch();
});
</script>

<template>
  <div class="flex justify-center items-center flex-col w-full h-full text-5xl">
    {{ t('common.hello') }}
    <div>
      <a-button type="primary" @click="handleChangeLocale">{{
        t('layout.setting.switchLanguage')
      }}</a-button>
      <a-date-picker></a-date-picker>
    </div>
    <div>
      <input
        :value="systemColor"
        type="color"
        @change="handleChangeColor($event)"
      />
    </div>
    <div>
      <a-switch
        v-model:checked="dark"
        un-checked-children="暗黑"
        checked-children="默认"
        @change="handleChangeDark"
      ></a-switch>
    </div>
  </div>
</template>

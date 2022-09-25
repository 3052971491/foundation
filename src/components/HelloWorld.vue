<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { useLocale } from '/@/locales/useLocale';
import { useI18n } from '/@/hooks/web/useI18n';
import { LocalEnum } from '/@/enums/localEnum';
const { changeLocale, getLocale } = useLocale();
const { t } = useI18n();
function hanlleChangeLocale() {
  if (getLocale.value == LocalEnum.ZH_CN) {
    changeLocale(LocalEnum.EN_US);
  } else {
    changeLocale(LocalEnum.ZH_CN);
  }
}
defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="flex justify-center flex-col">
    <h1><svg-icon name="vue"></svg-icon>Hello, Foundation</h1>
    <div>
      <div>
        <button @click="hanlleChangeLocale">
          {{ t('layout.setting.switchLanguage') }}
        </button>
      </div>
      {{ t('common.test') }}
    </div>
  </div>
</template>

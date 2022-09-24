<script setup lang="ts">
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
</script>

<template>
  <div>
    <div>
      <button @click="hanlleChangeLocale">
        {{ t('layout.setting.switchLanguage') }}
      </button>
    </div>
    {{ getLocale }} - {{ t('common.test') }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

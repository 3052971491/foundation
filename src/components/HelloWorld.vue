<script setup lang="ts">
import { useLocale } from '/@/locales/useLocale';
import { LocalEnum } from '/@/enums/localEnum';
import { useI18n } from '/@/hooks/web/useI18n';

const { getLocale, changeLocale } = useLocale();

const { t } = useI18n();

function handleChangeLocale() {
  changeLocale(
    getLocale.value === LocalEnum.ZH_CN ? LocalEnum.EN_US : LocalEnum.ZH_CN
  );
}
</script>

<template>
  <div class="flex justify-center items-center flex-col w-full h-full text-5xl">
    {{ t('common.hello') }}
    <div>
      <a-button @click="handleChangeLocale">切换语言</a-button>
      <a-date-picker></a-date-picker>
    </div>
  </div>
</template>

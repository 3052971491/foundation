<script setup lang="ts">
import { ref } from 'vue';
import { useLocale } from '/@/locales/useLocale';
import { LocalEnum } from '/@/enums/localEnum';
import { useI18n } from '/@/hooks/web/useI18n';
import 'ant-design-vue/dist/antd.variable.min.css';
import { ConfigProvider } from 'ant-design-vue';

const { getLocale, changeLocale } = useLocale();

const { t } = useI18n();

function handleChangeLocale() {
  changeLocale(
    getLocale.value === LocalEnum.ZH_CN ? LocalEnum.EN_US : LocalEnum.ZH_CN
  );
}

const systemColor = ref('#fb5430');
ConfigProvider.config({
  theme: { primaryColor: systemColor.value },
});
function handleChangeColor(e) {
  ConfigProvider.config({
    theme: { primaryColor: e.target.value },
  });
}

const dark = ref(false);
</script>

<template>
  <div class="flex justify-center items-center flex-col w-full h-full text-5xl">
    {{ t('common.hello') }}
    <div>
      <a-button type="primary" @click="handleChangeLocale">切换语言</a-button>
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
        un-checked-children="黑暗"
        checked-children="白天"
      ></a-switch>
    </div>
  </div>
</template>

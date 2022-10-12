<script setup lang="ts">
import { ref } from 'vue';
import { useLocale } from '/@/locales/useLocale';
import { LocalEnum } from '/@/enums/localEnum';
import { useI18n } from '/@/hooks/web/useI18n';
import lighter from 'ant-design-vue/dist/antd.variable.min.css';
import darker from 'ant-design-vue/dist/antd.dark.min.css';
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
function handleChangeDark(checked: boolean) {
  if (checked) {
    // 明亮主题
    addSkin(lighter);
  } else {
    // 暗色主题
    addSkin(darker);
  }
}
// 添加皮肤的方法
function addSkin(content: string) {
  let head = document.getElementsByTagName('head')[0];
  const getStyle = head.getElementsByTagName('style');
  // 查找style是否存在，存在的话需要删除dom
  if (getStyle.length > 0) {
    for (let i = 0, l = getStyle.length; i < l; i++) {
      if (getStyle[i].getAttribute('data-type') === 'theme') {
        getStyle[i].remove();
      }
    }
  }
  // 最后加入对应的主题和加载less的js文件
  let styleDom = document.createElement('style');
  styleDom.dataset.type = 'theme';
  styleDom.innerHTML = content;
  head.appendChild(styleDom);
}
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
        un-checked-children="暗黑"
        checked-children="默认"
        @change="handleChangeDark"
      ></a-switch>
    </div>
  </div>
</template>

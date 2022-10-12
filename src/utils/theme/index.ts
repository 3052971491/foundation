// import { darkCssIsReady, loadDarkThemeCss } from 'vite-plugin-theme/es/client';
import { addClass, hasClass, removeClass } from '/@/utils/dom';
import { ConfigProvider } from 'ant-design-vue';

import lighter from 'ant-design-vue/dist/antd.variable.min.css';
import darker from 'ant-design-vue/dist/antd.dark.min.css';

export async function updatePrimaryTheme(color: string) {
  ConfigProvider.config({
    theme: { primaryColor: color },
  });
}
export async function updateDarkTheme(mode: string | null = 'light') {
  const htmlRoot = document.getElementById('htmlRoot');
  if (!htmlRoot) {
    return;
  }
  const hasDarkClass = hasClass(htmlRoot, 'dark');
  if (mode === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
    if (!hasDarkClass) {
      addClass(htmlRoot, 'dark');
    }
    // 明亮主题
    addSkin(darker);
  } else {
    htmlRoot.setAttribute('data-theme', 'light');
    if (hasDarkClass) {
      removeClass(htmlRoot, 'dark');
    }
    // 暗色主题
    addSkin(lighter);
  }
}

export function addSkin(content: string) {
  const head = document.getElementsByTagName('head')[0];
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
  const styleDom = document.createElement('style');
  styleDom.dataset.type = 'theme';
  styleDom.innerHTML = content;
  head.appendChild(styleDom);
}

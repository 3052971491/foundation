import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/zh_CN';

const modules: Record<string, any> = import.meta.globEager('./zh-CN/**/*.ts');

export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
    antdLocale,
  },
};

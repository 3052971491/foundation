import { genMessage } from '../helper';

const modules: Record<string, any> = import.meta.globEager('./zh-CN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
  },
};

import type { RouteRecordRaw } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';

const modules: any = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

/** 根路由 */
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const basicRoutes = [RootRoute];

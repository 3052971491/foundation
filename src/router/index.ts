import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routes';

/**
 * 白名单
 * @description: 包含基本静态路由
 */
const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
getRouteNames(basicRoutes);

/**
 * @description: 创建路由实例
 */
export const router = createRouter({
  // 创建一个 hash 历史记录
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  // 在页面之间导航时控制滚动的函数。可以返回一个 Promise 来延迟滚动。
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description: 重置路由实例
 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

/**
 * @description: 初始化路由实例
 */
export function setupRouter(app: App<Element>) {
  app.use(router);
}

import type { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { store } from '/@/stores';
import { Menu } from '/@/router/types';
import { PageEnum } from '/@/enums/pageEnum';
import { useI18n } from '/@/hooks/web/useI18n';
import { useAppStoreWithOut } from './app';
import { asyncRoutes } from '/@/router/routes';
interface PermissionState {
  /** 权限代码列表 */
  permCodeList: Array<string | number>;
  /** 路由是否动态添加 */
  isDynamicAddedRoute: boolean;
  /** 触发菜单更新时间 */
  lastBuildMenuTime: number;
  /** 后台菜单列表 */
  backMenuList: Menu[];
  /** 菜单列表 */
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore('app-permission', {
  state: (): PermissionState => {
    return {
      permCodeList: [],
      isDynamicAddedRoute: false,
      lastBuildMenuTime: 0,
      backMenuList: [],
      frontMenuList: [],
    };
  },
  getters: {
    /** 获取权限代码列表 */
    getPermCodeList(): Array<string | number> {
      return this.permCodeList;
    },
    /** 获取后台菜单列表 */
    getBackMenuList(): Menu[] {
      return this.backMenuList;
    },
    /** 获取菜单列表 */
    getFrontMenuList(): Menu[] {
      return this.frontMenuList;
    },
    /** 获取触发菜单更新时间 */
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    /** 获取路由是否动态添加 */
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    /** 设置权限代码列表 */
    setPermCodeList(codeList: Array<string | number>) {
      this.permCodeList = codeList;
    },
    /** 设置菜单列表 */
    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },
    /** 设置后台菜单列表 */
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
      list?.length > 0 && this.setLastBuildMenuTime();
    },
    /** 设置触发菜单更新时间 */
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },
    /** 设置路由是否动态添加 */
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    /** 重置 */
    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.permCodeList = [];
      this.backMenuList = [];
      this.lastBuildMenuTime = 0;
    },

    /** 构建路由 */
    async buildRoutesAction(): Promise<Array<RouteRecordRaw>> {
      const { t } = useI18n();
      const appStore = useAppStoreWithOut();

      let routes: Array<RouteRecordRaw> = [];

      // const routeRemoveIgnoreFilter = (route: RouteRecordRaw) => {
      //   const { meta } = route;
      //   // ignoreRoute 为true 则路由仅用于菜单生成，不会在实际的路由表中出现
      //   const { ignoreRoute } = meta || {};
      //   // arr.filter 返回 true 表示该元素通过测试
      //   return !ignoreRoute;
      // };

      // 添加默认路由
      routes = asyncRoutes;

      // 添加动态路由
      // let routeList: Array<RouteRecordRaw> = [];
      try {
        // routeList = (await getMenuList()) as Array<RouteRecordRaw>;
      } catch (error) {
        console.error(error);
      }
      // routes = [...routeList];
      // const backMenuList = transformRouteToMenu(routeList as Menu);
      const backMenuList = routes;
      this.setBackMenuList(backMenuList as Array<Menu>);
      return routes;
    },
  },
});

export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}

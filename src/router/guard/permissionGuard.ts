import type { Router, RouteRecordRaw } from 'vue-router';

import { usePermissionStoreWithOut } from '/@/stores/modules/permission';
import { PageEnum } from '/@/enums/pageEnum';
import { RootRoute } from '/@/router/routes';
const LOGIN_PATH = PageEnum.BASE_LOGIN;

const ROOT_PATH = RootRoute.path;

const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    // if (getIsDynamicAddedRoute) {
    //   next();
    //   return;
    // }
    const routes = await permissionStore.buildRoutesAction();
    console.log(routes);

    routes.forEach((route) => {
      router.addRoute(route);
    });
    next();
  });
}

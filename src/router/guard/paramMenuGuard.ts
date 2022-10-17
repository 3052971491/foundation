import type { Router } from 'vue-router';
import { Menu } from '../types';
import { usePermissionStoreWithOut } from '/@/stores/modules/permission';
export function createParamMenuGuard(router: Router) {
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, _, next) => {
    if (!to.name) {
      next();
      return;
    }
    if (!permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }
    let menus: Menu[] = [];
    menus = permissionStore.getBackMenuList;
    next();
  });
}

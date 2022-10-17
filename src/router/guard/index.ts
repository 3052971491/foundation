import type { Router, RouteLocationNormalized } from 'vue-router';
import { createPermissionGuard } from './permissionGuard';
import { createParamMenuGuard } from './paramMenuGuard';
export function setupRouterGuard(router: Router) {
  // 将每一次路由跳转存起来，加快访问速度
  // createPageGuard(router);
  createPermissionGuard(router);
  createParamMenuGuard(router);
}

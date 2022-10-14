import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import { RoleEnum } from '/@/enums/roleEnum';

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success';
  content?: string;
  dot?: boolean;
}

export interface Menu {
  /** 名称 */
  name: string;
  /** 图标 */
  icon?: string;
  /** 路径 */
  path: string;
  /** 路径参数 */
  paramPath?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子菜单 */
  children?: Menu[];
  /** 序号 */
  orderNo?: number;
  /** 权限 */
  roles?: RoleEnum[];
  /** 路由信息 */
  meta?: Partial<RouteMeta>;
  /** 标记 */
  tag?: MenuTag;
  /** 是否隐藏菜单 */
  hideMenu?: boolean;
}

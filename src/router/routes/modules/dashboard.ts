import type { RouteRecordRaw } from 'vue-router';

import { LAYOUT } from '/@/router/constant';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        title: t('routes.dashboard.analysis'),
      },
    },
  ],
};

export default dashboard;

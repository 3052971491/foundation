/**
 * 获取配置文件变量名
 * @param env
 */
export function getConfigFileName(env: any) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '');
}

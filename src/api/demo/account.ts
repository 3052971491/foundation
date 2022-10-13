import { http } from '/@/utils/http';
import { GetUserInfoModel } from './model/userModel';
enum Api {
  GetUserInfo = '/account/getAccountInfo',
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.get<GetUserInfoModel>(
    { url: Api.GetUserInfo },
    { errorMessageMode: 'none' }
  );
}

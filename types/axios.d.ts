export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
/** 请求配置 */
export interface RequestOptions {
  /** 将请求参数拼接到url */
  joinParamsToUrl?: boolean;
  /** 格式请求参数时间 */
  formatDate?: boolean;
  /** 是否处理请求结果 */
  isTransformResponse?: boolean;
  /** 是否返回本机响应头  */
  /** 例如:当您需要获得响应头时，使用此属性 */
  isReturnNativeResponse?: boolean;
  /** 是否加入url */
  joinPrefix?: boolean;
  /** 接口地址，如果不填写，使用默认apiUrl */
  apiUrl?: string;
  /** 请求拼接路径 */
  urlPrefix?: string;
  /**错误消息提示类型 */
  errorMessageMode?: ErrorMessageMode;
  /** 是否添加时间戳 */
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  /** 是否在头部发送令牌 */
  withToken?: boolean;
}

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

/**  multipart/form-data: upload file */
export interface UploadFileParams {
  /** 其他参数 */
  data?: Record<string, any>;
  /** 文件参数接口字段名称 */
  name?: string;
  /** file name */
  file: File | Blob;
  /** file name */
  filename?: string;
  [key: string]: any;
}

/**
 * 数据处理类，可根据项目配置
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * @description: 请求前的流程配置
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig;

  /**
   * @description: 请求成功处理
   */
  transformRequestHook?: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions
  ) => AxiosRequestConfig;

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}

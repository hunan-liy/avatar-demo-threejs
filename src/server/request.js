import axios from 'axios';
import util from '@/libs/util.js';
import { Message } from 'element-ui';

axios.create({
  baseURL: '/', // api 的 base_url  process.env.BASE_API
  timeout: 30000 // request timeout
});
axios.defaults.withCredentials = false;
const _baseURL = '/';
// request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = util.cookies.get('token');
    if (token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    // for debug
    Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // for debu
    if (error?.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = '连接到服务器失败';
    }
    // 是否登录
    // console.log()
    Message({
      message: error.message,
      type: 'error',
      duration: 2 * 1000
    });
    return Promise.reject(error);
  }
);

/** 统一处理逻辑报错信息 */
// function checkStatus (response) {
//   console.log(2);
//   const _res = response.data;
//   const { code, msg } = _res;
//   if (code === 200) {
//     return _res;
//   } else {
//     Message({
//       message: msg,
//       type: 'error',
//       duration: 1 * 1500
//     });
//   }
// }

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    // alert(res.msg)
  }
  if (res.data && !res.data.success) {
    // alert(res.data.error_msg)
  }
  return res;
}
export default {
  post (url, params, config) {
    return axios({
      method: 'post',
      baseURL: _baseURL,
      url,
      data: params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      responseType: config?.type || 'json'
    })
      .then((response) => {
        const _res = response.data;
        const { code, msg } = _res;
        if (code === 200) {
          return _res;
        } else {
          Message({
            message: msg,
            type: 'error',
            duration: 1 * 1500
          });
          return Promise.reject(_res);
        }
      })
      .catch((res) => {
        return Promise.reject(checkCode(res));
      });
  },
  get (url, params, config) {
    return axios({
      method: 'get',
      baseURL: _baseURL,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      responseType: config?.type || 'json'
    })
      .then((response) => {
        const _res = response.data;
        const { code, msg } = _res;
        if (code === 200) {
          return _res;
        } else {
          Message({
            message: msg,
            type: 'error',
            duration: 1 * 1500
          });
          return Promise.reject(_res);
        }
      })
      .catch((res) => {
        return Promise.reject(checkCode(res));
      });
  }
};

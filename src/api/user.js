import http from '@/server/request';
import api from '@/server/apiSite/index'; // 接口地址
import util from '@/libs/util.js';

export function login (data) {
  return http.post(api.prefix + api.user.login, data).then((res) => {
    if (res) {
      const token = res.data;
      util.cookies.set('token', `Bearer ${token}`);
    }
    return res;
  });
}

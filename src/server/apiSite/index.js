import user from './modules/user';
import creater from './modules/creater';

const { NODE_ENV, VUE_APP_SERVER } = process.env;

const api = {
  // prefix: NODE_ENV === 'development' ? '' : `${VUE_APP_SERVER}`, // 线上接口前缀
  prefix: `${VUE_APP_SERVER}`, // 线上接口前缀
  user,
  creater
};
export default api;

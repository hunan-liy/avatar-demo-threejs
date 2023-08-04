import Vue from 'vue';
import VueRouter from 'vue-router';
// import api from '../server/apiSite'
// import axios from 'axios'
// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import util from '@/libs/util';
// 路由数据
import routes from './routes';

// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return VueRouterPush.call(this, location).catch((err) => err);
};
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace (location) {
  return VueRouterReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
  const { meta: toMeta = {}, path: toPath } = to;
  const { auth = true } = toMeta;
  // 进度条
  NProgress.start();
  const token = util.cookies.get('token');
  if (token) {
    next();
  } else {
    // 需要登录则跳转到登录页
    if (auth) {
      router.push({
        path: '/login',
        query: {
          redirect: encodeURIComponent(toPath)
        }
      });
    }
    next();
  }
});

router.afterEach((to) => {
  // 进度条
  NProgress.done();
  // 更改标题
  util.title(to.meta.title);
});

export default router;

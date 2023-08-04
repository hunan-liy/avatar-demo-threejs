// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV);

/**
 * 在主框架之外显示
 */
const page = [
  {
    path: '/',
    name: 'Demo',
    component: _import('creater/index'),
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: _import('login/index'),
    meta: {
      auth: false
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: _import('test/test'),
    meta: {
      auth: false
    }
  },
  {
    path: '/test1',
    name: 'Test1',
    component: _import('test/test1'),
    meta: {
      auth: false
    }
  }
];

// 重新组织后导出
export default [...page];

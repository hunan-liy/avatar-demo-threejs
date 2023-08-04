const { VUE_APP_API_MODULE, VUE_APP_SERVER } = process.env;
const apiKey = VUE_APP_API_MODULE.replace('/', '');
// 要代理的列表
const proxyList = {
  [apiKey]: {
    target: VUE_APP_SERVER,
    rewrite: ''
  } // 公共请求域名
};
const proxyInfo = {};

Object.entries(proxyList).forEach(([key, item]) => {
  let origin = item;
  if (item) {
    let pathRewriteInfo = {};
    if (typeof item === 'object') {
      const { target = '', rewrite } = item;
      origin = target;
      // 是否需要替换请求路径
      if (rewrite !== undefined) {
        pathRewriteInfo = {
          [`^/${key}`]: rewrite
        };
      }
    }
    proxyInfo[`/${key}`] = {
      target: origin,
      changeOrigin: true, // 是否跨域
      pathRewrite: pathRewriteInfo
    };
  }
});

module.exports = {
  proxy: proxyInfo
};

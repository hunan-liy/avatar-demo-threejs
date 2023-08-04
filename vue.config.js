const { defineConfig } = require('@vue/cli-service');
const devServer = require('./build/devServer');
// 拼接路径
const resolve = (dir) => require('path').join(__dirname, dir);
const { NODE_ENV, VUE_APP_PUBLIC_PATH } = process.env;
// 增加环境变量
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: VUE_APP_PUBLIC_PATH || '/', // 根据你的实际情况更改这里
  lintOnSave: NODE_ENV === 'development',
  // devServer,
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        additionalData: `
          @use 'sass:math';
          @import '~@/assets/style/public.scss';
        `
      }
    }
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: (config) => {
    // image exclude
    const imagesRule = config.module.rule('images');
    imagesRule.test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/).end();
    // 重新设置 alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@libs', resolve('src/libs'));
  }
});

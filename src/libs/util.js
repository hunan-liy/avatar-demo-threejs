import cookies from './util.cookies'
// import db from './util.db'
// import log from './util.log'
// import browser from './util.browser'
// import dataType from './util.type'

// const { VUE_APP_PUBLIC_PATH } = process.env

const util = {
  cookies,
  // db,
  // log,
  // browser,
  // dataType
};

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || '';
  window.document.title = `${processTitle}${
    titleText ? ` | ${titleText}` : ''
  }`;
};

export default util;

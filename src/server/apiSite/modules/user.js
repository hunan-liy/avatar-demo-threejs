// 用户
const { VUE_APP_API_MODULE } = process.env;
const symbol = VUE_APP_API_MODULE;
module.exports = {
  // 登录
  login: `${symbol}/user/login`
  // login: `${symbol}/mock/8f608034cf2cc784dfc1c7be1434a452/meta-human/login`
};

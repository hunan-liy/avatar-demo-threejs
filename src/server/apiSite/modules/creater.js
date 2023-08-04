// 用户
const { VUE_APP_API_MODULE } = process.env;
const symbol = VUE_APP_API_MODULE;
module.exports = {
  // 获取脸型列表
  getFaceList: `${symbol}/head/face`,
  // 获取发型列表
  getHairstyleList: `${symbol}/hair/hairstyle`,
  // 获取服装列表
  getClothesList: `${symbol}/clothes/list`,
  // 获取表情列表
  getExpressionList: `${symbol}/expression/list/blend-shape`,
  // 获取动作列表
  getAnimationList: `${symbol}/bone-animation/list`,
  // 获取场景列表
  getSceneList: `${symbol}/environment/list`
};

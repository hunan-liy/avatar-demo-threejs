import http from '@/server/request';
import api from '@/server/apiSite/index'; // 接口地址

// 获取脸型列表
export function getFaceList (data) {
  return http.get(api.prefix + api.creater.getFaceList, data).then((res) => {
    let { data } = res;
    data = data.map((ele) => {
      return {
        ...ele,
        previewUrl: require('../assets/images/face.jpg')
      };
    });
    return {
      ...res,
      data
    };
  });
}

// 获取发型列表
export function getHairstyleList (data) {
  return http
    .get(api.prefix + api.creater.getHairstyleList, data)
    .then((res) => {
      let { data } = res;
      data = data.map((ele) => {
        return {
          ...ele,
          previewUrl: require('../assets/images/face.jpg')
        };
      });
      return {
        ...res,
        data
      };
    });
}

// 获取服饰列表
export function getClothesList (data) {
  return http.get(api.prefix + api.creater.getClothesList, data).then((res) => {
    let { data } = res;
    data = data.map((ele) => {
      return {
        ...ele,
        previewUrl: require('../assets/images/face.jpg')
      };
    });
    return {
      ...res,
      data
    };
  });
}

// 获取表情列表
export function getExpressionList (data) {
  return http.get(api.prefix + api.creater.getExpressionList, data).then((res) => {
    let { data } = res;
    data = data.map((ele) => {
      return {
        ...ele,
        previewUrl: require('../assets/images/face.jpg')
      };
    });
    return {
      ...res,
      data
    };
  });
}

// 获取动作列表
export function getAnimationList (data) {
  return http.get(api.prefix + api.creater.getAnimationList, data).then((res) => {
    let { data } = res;
    data = data.map((ele) => {
      return {
        ...ele,
        previewUrl: require('../assets/images/face.jpg')
      };
    });
    return {
      ...res,
      data
    };
  });
}

// 获取动作列表
export function getSceneList (data) {
  return http.get(api.prefix + api.creater.getSceneList, data).then((res) => {
    let { data } = res;
    data = data.map((ele) => {
      return {
        ...ele,
        previewUrl: require('../assets/images/scene.jpg')
      };
    });
    return {
      ...res,
      data
    };
  });
}

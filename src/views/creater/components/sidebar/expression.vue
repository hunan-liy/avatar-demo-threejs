<template>
  <!-- 脸型 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list"></sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
import { getExpressionList } from '@/api/creater';
export default {
  components: { sidebarList },
  data () {
    return {
      list: [
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '空'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '向左看'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '生气'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '皱眉'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '左撇嘴'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '右撇嘴'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '眯眼'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '睁大眼'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '翘上嘴唇'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '微笑'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '漏齿笑'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '张大嘴'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '鼓气'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '闭左眼'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '闭右眼'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '向上看'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '向下看'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '向右看'
        // }
      ]
    };
  },
  created () {
    // this.getExpressionList();
  },
  methods: {
    getExpressionList () {
      getExpressionList({}).then((res) => {
        if (res) {
          const { data } = res;
          this.list = [];
          data.forEach((ele) => {
            const { id, name, previewUrl, type, fileInfo } = ele;
            this.list.push({
              id,
              name,
              img: previewUrl,
              type,
              fileInfo
            });
          });
        }
      });
    }
  }
};
</script>

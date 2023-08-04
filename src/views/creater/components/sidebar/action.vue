<template>
  <!-- 脸型 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list"></sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
import { getAnimationList } from '@/api/creater';
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
        //   name: '基础Pose'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '基础站立'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '客服'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose02'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose03'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose04'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose05'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose06'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose07'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose08'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose09'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: 'pose10'
        // }
      ]
    };
  },
  created () {
    // this.getAnimationList();
  },
  methods: {
    getAnimationList () {
      getAnimationList({}).then((res) => {
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

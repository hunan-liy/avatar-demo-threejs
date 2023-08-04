<template>
  <!-- 脸型 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list" @select="itemSelect"></sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
import { getFaceList } from '@/api/creater';
export default {
  components: { sidebarList },
  data () {
    return {
      list: [
        {
          id: 1,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape1/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape1/head.glb`,
          name: '脸型1'
        },
        {
          id: 2,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape2/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape2/head.glb`,
          name: '脸型2'
        },
        {
          id: 3,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape3/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape3/head.glb`,
          name: '脸型3'
        },
        {
          id: 4,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape4/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape4/head.glb`,
          name: '脸型4'
        },
        {
          id: 5,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape5/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape5/head.glb`,
          name: '脸型5'
        },
        {
          id: 6,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape6/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape6/head.glb`,
          name: '脸型6'
        },
        {
          id: 7,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape7/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape7/head.glb`,
          name: '脸型7'
        },
        {
          id: 8,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape8/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape8/head.glb`,
          name: '脸型8'
        },
        {
          id: 9,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape9/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape9/head.glb`,
          name: '脸型9'
        },
        {
          id: 10,
          img: `${process.env.BASE_URL}resources/faceShape/faceShape10/head.png`,
          glb: `${process.env.BASE_URL}resources/faceShape/faceShape10/head.glb`,
          name: '脸型10'
        }
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '宝仪脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '婴儿脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '鸡蛋脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '鸡蛋脸02'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '瓜子脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '生气脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '肥圆脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '小圆脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '微圆脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '尖长脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '瓜子脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '鹅蛋脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '心形脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '网红脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '方尖脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '平直脸'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '惊讶脸'
        // }
      ]
    };
  },
  created () {
    // this.getFaceList();
  },
  methods: {
    itemSelect (item, index) {
      this.$emit('change', item);
    },
    getFaceList () {
      getFaceList({}).then((res) => {
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

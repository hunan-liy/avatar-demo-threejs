<template>
  <!-- 脸型 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list" @select="itemSelect"></sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
import { getHairstyleList } from '@/api/creater';
export default {
  components: { sidebarList },
  data () {
    return {
      list: [
        {
          img: `${process.env.BASE_URL}resources/base/empty_icon.svg`,
          name: '空'
        },
        {
          id: 1,
          img: `${process.env.BASE_URL}resources/hair/hair1/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair1/hair.glb`,
          name: '发型1'
        },
        {
          id: 2,
          img: `${process.env.BASE_URL}resources/hair/hair2/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair2/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair2/hair_base.jfif`,
          name: '发型2'
        },
        {
          id: 3,
          img: `${process.env.BASE_URL}resources/hair/hair3/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair3/hair.glb`,
          name: '发型3'
        },
        {
          id: 4,
          img: `${process.env.BASE_URL}resources/hair/hair4/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair4/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair4/hair_base.jfif`,
          name: '发型4'
        },
        {
          id: 5,
          img: `${process.env.BASE_URL}resources/hair/hair5/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair5/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair5/hair_base.jfif`,
          name: '发型5'
        },
        {
          id: 6,
          img: `${process.env.BASE_URL}resources/hair/hair6/hair.png`,
          texture: `${process.env.BASE_URL}resources/hair/hair6/hair_base.jfif`,
          name: '发型6'
        },
        {
          id: 7,
          img: `${process.env.BASE_URL}resources/hair/hair7/hair.png`,
          texture: `${process.env.BASE_URL}resources/hair/hair7/hair_base.jfif`,
          name: '发型7'
        },
        {
          id: 8,
          img: `${process.env.BASE_URL}resources/hair/hair8/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair8/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair8/hair_base.jfif`,
          name: '发型8'
        },
        {
          id: 9,
          img: `${process.env.BASE_URL}resources/hair/hair9/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair9/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair9/hair_base.jfif`,
          name: '发型9'
        },
        {
          id: 10,
          img: `${process.env.BASE_URL}resources/hair/hair10/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair10/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair10/hair_base.jfif`,
          name: '发型10'
        },
        {
          id: 11,
          img: `${process.env.BASE_URL}resources/hair/hair11/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair11/hair.glb`,
          name: '发型11'
        },
        {
          id: 12,
          img: `${process.env.BASE_URL}resources/hair/hair12/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair12/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair12/hair_base.jfif`,
          name: '发型12'
        },
        {
          id: 13,
          img: `${process.env.BASE_URL}resources/hair/hair13/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair13/hair.glb`,
          name: '发型13'
        },
        {
          id: 14,
          img: `${process.env.BASE_URL}resources/hair/hair14/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair14/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair14/hair_base.jfif`,
          name: '发型14'
        },
        {
          id: 15,
          img: `${process.env.BASE_URL}resources/hair/hair15/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair15/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair15/hair_base.jfif`,
          name: '发型15'
        },
        {
          id: 16,
          img: `${process.env.BASE_URL}resources/hair/hair16/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair16/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair16/hair_base.jfif`,
          name: '发型16'
        },
        {
          id: 17,
          img: `${process.env.BASE_URL}resources/hair/hair17/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair17/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair17/hair_base.jfif`,
          name: '发型17'
        },
        {
          id: 18,
          img: `${process.env.BASE_URL}resources/hair/hair18/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair18/hair.glb`,
          name: '发型18'
        },
        {
          id: 19,
          img: `${process.env.BASE_URL}resources/hair/hair19/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair19/hair.glb`,
          texture: `${process.env.BASE_URL}resources/hair/hair19/hair_base.jfif`,
          name: '发型19'
        },
        {
          id: 20,
          img: `${process.env.BASE_URL}resources/hair/hair20/hair.png`,
          glb: `${process.env.BASE_URL}resources/hair/hair20/hair.glb`,
          name: '发型20'
        }

        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '空'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '丸子头'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '短发'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '过肩内扣发'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '齐肩内扣发'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '单马尾'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '过肩大波浪'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '齐肩小波浪'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '波波头'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '测卷发'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '短马尾'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '短卷头'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '刘海长发'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '双马尾'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '短发2'
        // }
      ]
    };
  },
  created () {
    // this.getHairstyleList();
  },
  methods: {
    itemSelect (item, index) {
      this.$emit('change', item);
    },
    getHairstyleList () {
      getHairstyleList({}).then((res) => {
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

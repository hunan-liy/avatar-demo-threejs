<template>
  <!-- 脸型 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list" @select="itemSelect"></sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
import { getClothesList } from '@/api/creater';
import mixin from './mixin';
export default {
  components: { sidebarList },
  mixins: [mixin],
  data () {
    return {
      list: [
        {
          img: `${process.env.BASE_URL}resources/base/empty_icon.svg`,
          name: '空'
        },
        {
          id: 0,
          img: `${process.env.BASE_URL}resources/dress/angel/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/angel/dress.glb`,
          name: 'angel'
        },
        {
          id: 1,
          img: `${process.env.BASE_URL}resources/dress/armorsuit/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/armorsuit/dress.glb`,
          name: 'armorsuit'
        },
        {
          id: 2,
          img: `${process.env.BASE_URL}resources/dress/backtoschool/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/backtoschool/dress.glb`,
          name: 'backtoschool'
        },
        {
          id: 3,
          img: `${process.env.BASE_URL}resources/dress/bmw-hoodie/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/bmw-hoodie/dress.glb`,
          name: 'bmw-hoodie'
        },
        {
          id: 4,
          img: `${process.env.BASE_URL}resources/dress/bodysuit/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/bodysuit/dress.glb`,
          name: 'bodysuit'
        },
        {
          id: 5,
          img: `${process.env.BASE_URL}resources/dress/costume/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/costume/dress.glb`,
          name: 'costume'
        },
        {
          id: 6,
          img: `${process.env.BASE_URL}resources/dress/cupra/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/cupra/dress.glb`,
          name: 'cupra'
        },
        {
          id: 7,
          img: `${process.env.BASE_URL}resources/dress/m-rtfkt/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/m-rtfkt/dress.glb`,
          name: 'm-rtfkt'
        },
        {
          id: 8,
          img: `${process.env.BASE_URL}resources/dress/newbalance/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/newbalance/dress.glb`,
          name: 'newbalance'
        },
        {
          id: 9,
          img: `${process.env.BASE_URL}resources/dress/pullandbear/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/pullandbear/dress.glb`,
          name: 'pullandbear'
        },
        {
          id: 10,
          img: `${process.env.BASE_URL}resources/dress/rtfkt/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/rtfkt/dress.glb`,
          name: 'rtfkt'
        },
        {
          id: 11,
          img: `${process.env.BASE_URL}resources/dress/sidequest/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/sidequest/dress.glb`,
          name: 'sidequest'
        },
        {
          id: 12,
          img: `${process.env.BASE_URL}resources/dress/starwarstaurus/dress.png`,
          glb: `${process.env.BASE_URL}resources/dress/starwarstaurus/dress.glb`,
          name: 'starwarstaurus'
        }
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '百褶裙套装'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '皮衣套装'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '格子裙套装'
        // },
        // {
        //   img: require('../../../../assets/images/face.jpg'),
        //   name: '足球宝贝'
        // }
      ]
    };
  },
  created () {
    // this.getClothesList();
  },
  methods: {
    itemSelect (item, index) {
      this.$emit('change', item);
    },
    getClothesList () {
      getClothesList({}).then((res) => {
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
<style lang="scss" scoped>
::v-deep {
  .img-box {
    padding: 5px;
  }

  .list-item:first-child .img-box {
    padding: 0;
  }
}
</style>

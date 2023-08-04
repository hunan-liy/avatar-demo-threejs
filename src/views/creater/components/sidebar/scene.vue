<template>
  <!-- 场景 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list" :cols="2" @select="itemSelect"> </sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
import { getSceneList } from '@/api/creater';
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
          id: 1,
          img: `${process.env.BASE_URL}resources/scene/scene1/scene.jpg`,
          glb: `${process.env.BASE_URL}resources/scene/scene1/scene.glb`,
          name: '场景1',
          data: {
            positionY: -16.4,
            positionZ: 1.5,
            rotateY: -1.5707963267948966
          }
        },
        {
          id: 2,
          img: `${process.env.BASE_URL}resources/scene/scene2/scene.jpg`,
          glb: `${process.env.BASE_URL}resources/scene/scene2/scene.glb`,
          name: '场景2',
          data: {
            scaleX: 0.06,
            scaleY: 0.06,
            scaleZ: 0.06,
            positionY: -1,
            rotateY: 3.141592653589793
          }
        },
        {
          id: 3,
          img: `${process.env.BASE_URL}resources/scene/scene3/scene.jpg`,
          glb: `${process.env.BASE_URL}resources/scene/scene3/scene.glb`,
          name: '场景3',
          data: {
            scaleX: 0.8,
            scaleY: 0.8,
            scaleZ: 0.8,
            positionY: -2
          }
        },
        {
          id: 4,
          img: `${process.env.BASE_URL}resources/scene/scene4/scene.jpg`,
          glb: `${process.env.BASE_URL}resources/scene/scene4/scene.glb`,
          name: '场景4',
          data: {
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
            positionY: -2.2
          }
        }
      ]
    };
  },
  created () {
    // this.getSceneList();
  },
  methods: {
    itemSelect (item, index) {
      this.$emit('change', item);
    },
    getSceneList () {
      getSceneList({}).then((res) => {
        console.log(res);
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

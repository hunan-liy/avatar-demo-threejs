<template>
  <!-- 眼镜 -->
  <div class="sidebar-wrap">
    <sidebar-list :list="list" @select="itemSelect"></sidebar-list>
  </div>
</template>
<script>
import sidebarList from './sidebar-list.vue';
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
          img: `${process.env.BASE_URL}resources/glasses/glasses1/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses1/glasses.glb`,
          name: '眼镜1'
        },
        {
          id: 2,
          img: `${process.env.BASE_URL}resources/glasses/glasses2/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses2/glasses.glb`,
          name: '眼镜2'
        },
        {
          id: 3,
          img: `${process.env.BASE_URL}resources/glasses/glasses3/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses3/glasses.glb`,
          name: '眼镜3'
        },
        {
          id: 4,
          img: `${process.env.BASE_URL}resources/glasses/glasses4/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses4/glasses.glb`,
          name: '眼镜4'
        },
        {
          id: 5,
          img: `${process.env.BASE_URL}resources/glasses/glasses5/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses5/glasses.glb`,
          name: '眼镜5'
        },
        {
          id: 6,
          img: `${process.env.BASE_URL}resources/glasses/glasses6/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses6/glasses.glb`,
          name: '眼镜6'
        },
        {
          id: 7,
          img: `${process.env.BASE_URL}resources/glasses/glasses7/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses7/glasses.glb`,
          name: '眼镜7'
        },
        {
          id: 8,
          img: `${process.env.BASE_URL}resources/glasses/glasses8/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses8/glasses.glb`,
          name: '眼镜8'
        },
        {
          id: 9,
          img: `${process.env.BASE_URL}resources/glasses/glasses9/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses9/glasses.glb`,
          name: '眼镜9'
        },
        {
          id: 10,
          img: `${process.env.BASE_URL}resources/glasses/glasses10/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses10/glasses.glb`,
          name: '眼镜10'
        },
        {
          id: 11,
          img: `${process.env.BASE_URL}resources/glasses/glasses11/glasses.png`,
          glb: `${process.env.BASE_URL}resources/glasses/glasses11/glasses.glb`,
          name: '眼镜11'
        }
      ]
    };
  },
  created () {
    // this.getFaceList();
  },
  methods: {
    itemSelect (item, index) {
      this.$emit('change', item);
    }
  }
};
</script>

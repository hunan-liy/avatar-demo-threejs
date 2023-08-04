<template>
  <!-- 妆容 -->
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
          id: 17,
          img: `${process.env.BASE_URL}resources/facemask/facemask17/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask17/facemask.png`,
          name: '妆容1'
        },
        {
          id: 18,
          img: `${process.env.BASE_URL}resources/facemask/facemask18/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask18/facemask.png`,
          name: '妆容2'
        },

        {
          id: 3,
          img: `${process.env.BASE_URL}resources/facemask/facemask3/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask3/facemask.png`,
          name: '妆容3'
        },
        {
          id: 4,
          img: `${process.env.BASE_URL}resources/facemask/facemask4/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask4/facemask.png`,
          name: '妆容4'
        },
        {
          id: 5,
          img: `${process.env.BASE_URL}resources/facemask/facemask5/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask5/facemask.png`,
          name: '妆容5'
        },
        {
          id: 6,
          img: `${process.env.BASE_URL}resources/facemask/facemask6/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask6/facemask.png`,
          name: '妆容6'
        },
        {
          id: 7,
          img: `${process.env.BASE_URL}resources/facemask/facemask7/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask7/facemask.png`,
          name: '妆容7'
        },
        {
          id: 8,
          img: `${process.env.BASE_URL}resources/facemask/facemask8/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask8/facemask.png`,
          name: '妆容8'
        },
        {
          id: 9,
          img: `${process.env.BASE_URL}resources/facemask/facemask9/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask9/facemask.png`,
          name: '妆容9'
        },
        {
          id: 10,
          img: `${process.env.BASE_URL}resources/facemask/facemask10/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask10/facemask.png`,
          name: '妆容10'
        },
        {
          id: 11,
          img: `${process.env.BASE_URL}resources/facemask/facemask11/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask11/facemask.png`,
          name: '妆容11'
        },
        {
          id: 12,
          img: `${process.env.BASE_URL}resources/facemask/facemask12/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask12/facemask.png`,
          name: '妆容12'
        },
        {
          id: 13,
          img: `${process.env.BASE_URL}resources/facemask/facemask13/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask13/facemask.png`,
          name: '妆容13'
        },
        {
          id: 14,
          img: `${process.env.BASE_URL}resources/facemask/facemask14/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask14/facemask.png`,
          name: '妆容14'
        },
        {
          id: 15,
          img: `${process.env.BASE_URL}resources/facemask/facemask15/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask15/facemask.png`,
          name: '妆容15'
        },
        {
          id: 16,
          img: `${process.env.BASE_URL}resources/facemask/facemask16/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask16/facemask.png`,
          name: '妆容16'
        },
        {
          id: 1,
          img: `${process.env.BASE_URL}resources/facemask/facemask1/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask1/facemask.png`,
          name: '妆容17'
        },
        {
          id: 2,
          img: `${process.env.BASE_URL}resources/facemask/facemask2/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask2/facemask.png`,
          name: '妆容18'
        },
        {
          id: 19,
          img: `${process.env.BASE_URL}resources/facemask/facemask19/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask19/facemask.png`,
          name: '妆容19'
        },
        {
          id: 20,
          img: `${process.env.BASE_URL}resources/facemask/facemask20/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask20/facemask.png`,
          name: '妆容20'
        },
        {
          id: 21,
          img: `${process.env.BASE_URL}resources/facemask/facemask21/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask21/facemask.png`,
          name: '妆容21'
        },
        {
          id: 22,
          img: `${process.env.BASE_URL}resources/facemask/facemask22/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask22/facemask.png`,
          name: '妆容22'
        },
        {
          id: 23,
          img: `${process.env.BASE_URL}resources/facemask/facemask23/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask23/facemask.png`,
          name: '妆容23'
        },
        {
          id: 24,
          img: `${process.env.BASE_URL}resources/facemask/facemask24/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask24/facemask.png`,
          name: '妆容24'
        },
        {
          id: 25,
          img: `${process.env.BASE_URL}resources/facemask/facemask25/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask25/facemask.png`,
          name: '妆容25'
        },
        {
          id: 26,
          img: `${process.env.BASE_URL}resources/facemask/facemask26/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask26/facemask.png`,
          name: '妆容26'
        },
        {
          id: 27,
          img: `${process.env.BASE_URL}resources/facemask/facemask27/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask27/facemask.png`,
          name: '妆容27'
        },
        {
          id: 28,
          img: `${process.env.BASE_URL}resources/facemask/facemask28/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask28/facemask.png`,
          name: '妆容28'
        },
        {
          id: 29,
          img: `${process.env.BASE_URL}resources/facemask/facemask29/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask29/facemask.png`,
          name: '妆容29'
        },
        {
          id: 30,
          img: `${process.env.BASE_URL}resources/facemask/facemask30/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask30/facemask.png`,
          name: '妆容30'
        },
        {
          id: 31,
          img: `${process.env.BASE_URL}resources/facemask/facemask31/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask31/facemask.png`,
          name: '妆容31'
        },
        {
          id: 32,
          img: `${process.env.BASE_URL}resources/facemask/facemask32/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask32/facemask.png`,
          name: '妆容32'
        },
        {
          id: 33,
          img: `${process.env.BASE_URL}resources/facemask/facemask33/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask33/facemask.png`,
          name: '妆容33'
        },
        {
          id: 34,
          img: `${process.env.BASE_URL}resources/facemask/facemask34/facemask-icon.png`,
          texture: `${process.env.BASE_URL}resources/facemask/facemask34/facemask.png`,
          name: '妆容34'
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

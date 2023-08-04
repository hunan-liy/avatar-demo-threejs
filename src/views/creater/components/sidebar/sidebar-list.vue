<template>
  <div class="sidebar-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="list-item"
      @click="selectItem(index)"
    >
      <slot>
        <div
          :class="[
            cols === 2 ? 'img-box1' : 'img-box',
            active === index ? 'active' : ''
          ]"
        >
          <img :src="item.img" class="img" alt="" />
        </div>
        <div class="name">{{ item.name }}</div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: null
    };
  },
  props: {
    cols: {
      type: Number,
      default: 3
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectItem (index) {
      this.active = index;
      this.$emit('select', this.list[index], index);
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-list {
  width: 324px;
  display: flex;
  flex-wrap: wrap;

  .list-item {
    padding: 0 6px 10px 6px;
    cursor: pointer;

    .img-box {
      width: 96px;
      height: 96px;
    }

    .img-box1 {
      width: 150px;
      height: 96px;
    }

    .img {
      width: 100%;
      height: 100%;
    }

    .active {
      border: 3px solid #00a2dd;
    }

    .name {
      font-size: 12px;
      color: rgba($color: #fff, $alpha: 0.45);
      padding-top: 5px;
      text-align: center;
    }
  }
}
</style>

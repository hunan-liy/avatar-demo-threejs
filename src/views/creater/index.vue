<template>
  <div class="creater">
    <div class="header">
      <div class="title" @click="test">虚拟数字人-编辑</div>
      <div class="export">
        <el-button class="export-btn" type="danger" @click="controlsReset">
          <span>重置镜头</span>
        </el-button>
        <el-button class="export-btn" type="danger" @click="exportModel">
          <span>导出</span>
        </el-button>
      </div>
    </div>
    <div class="body">
      <div class="body-left">
        <div class="sidebar">
          <div
            v-for="(item, index) in sidebarList"
            :key="index"
            class="sidebar-item"
            :class="sidebarActive === item.id ? 'active' : ''"
            @click="changeSidebar(item.id)"
          >
            <div class="icon-box">
              <i class="iconfont" :class="item.icon"></i>
            </div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
        <div class="bar-content">
          <div class="content-list">
            <!-- 脸型 -->
            <face-shape
              v-show="sidebarActive === sidebarMap.faceShape"
              @change="changeFaceShape"
            ></face-shape>
            <!-- 妆容 -->
            <makeup
              v-show="sidebarActive === sidebarMap.makeup"
              @change="changeMakeup"
            ></makeup>
            <!-- 发型 -->
            <hairstyle
              v-show="sidebarActive === sidebarMap.hairstyle"
              @change="changeHairstyle"
            ></hairstyle>
            <!-- 服饰 -->
            <dress
              v-show="sidebarActive === sidebarMap.dress"
              @change="changeDress"
            ></dress>
            <!-- 表情 -->
            <expression
              v-show="sidebarActive === sidebarMap.expression"
            ></expression>
            <!-- 动作 -->
            <action v-show="sidebarActive === sidebarMap.action"></action>
            <!-- 场景 -->
            <scene
              v-show="sidebarActive === sidebarMap.scene"
              @change="changeScene"
            ></scene>
            <!-- 眼镜 -->
            <glasses
              v-show="sidebarActive === sidebarMap.glasses"
              @change="changeGlasses"
            ></glasses>
          </div>
        </div>
      </div>
      <div class="body-right">
        <threejs-creater
          ref="threejsCreater"
          :head="head"
          :body="body"
          :hair="hair"
          :hair_base="hair_base"
          :makeup="makeup"
          :glasses="glasses"
          :sceneObj="sceneObj"
        ></threejs-creater>
      </div>
    </div>
  </div>
</template>
<script>
import ThreejsCreater from './components/threejsCreater.vue';
import sidebarMap from '@/maps/creater/sidebar';
import faceShape from './components/sidebar/face-shape.vue';
import makeup from './components/sidebar/makeup.vue';
import hairstyle from './components/sidebar/hairstyle.vue';
import dress from './components/sidebar/dress.vue';
import expression from './components/sidebar/expression.vue';
import action from './components/sidebar/action.vue';
import scene from './components/sidebar/scene.vue';
import glasses from './components/sidebar/glasses.vue';
export default {
  components: {
    ThreejsCreater,
    faceShape,
    makeup,
    hairstyle,
    dress,
    expression,
    action,
    scene,
    glasses
  },
  data () {
    return {
      sidebarMap,
      sidebarList: [
        // {
        //   id: sidebarMap.faceShape,
        //   icon: 'icon-face-shape3',
        //   name: '脸型'
        // },

        {
          id: sidebarMap.hairstyle,
          icon: 'icon-hairstyle',
          name: '发型'
        },
        {
          id: sidebarMap.makeup,
          icon: 'icon-makeup',
          name: '妆容'
        },
        {
          id: sidebarMap.dress,
          icon: 'icon-dress',
          name: '服饰'
        },
        // {
        //   id: sidebarMap.expression,
        //   icon: 'icon-expression',
        //   name: '表情'
        // },
        // {
        //   id: sidebarMap.action,
        //   icon: 'icon-action',
        //   name: '动作'
        // },
        {
          id: sidebarMap.glasses,
          icon: 'icon-glasses',
          name: '眼镜'
        },
        {
          id: sidebarMap.scene,
          icon: 'icon-scene',
          name: '场景'
        }
      ],
      sidebarActive: sidebarMap.hairstyle,
      head: null,
      body: null,
      hair: null,
      hair_base: null,
      makeup: null,
      glasses: null,
      sceneObj: null
    };
  },
  methods: {
    test () {
      this.$router.push('/login');
    },
    changeSidebar (id) {
      if (this.sidebarActive !== id) {
        this.sidebarActive = id;
      }
    },
    changeFaceShape (item) {
      this.head = item.glb;
    },
    changeDress (item) {
      this.body = item.glb;
    },
    changeHairstyle (item) {
      const { glb = null, texture = null } = item;
      this.hair = glb;
      this.hair_base = texture;
    },
    changeMakeup (item) {
      this.makeup = item.texture;
    },
    changeGlasses (item) {
      this.glasses = item.glb;
    },
    changeScene (item) {
      const { glb, data } = item;
      this.sceneObj = {
        glb,
        data
      };
    },
    exportModel () {
      this.$refs.threejsCreater.exportModel();
    },
    controlsReset () {
      this.$refs.threejsCreater.controlsReset();
    }
  }
};
</script>
<style lang="scss" scoped>
.creater {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // background-image: url('../../assets/images/back.jpg');

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #0f0f0f;
    background-color: #2e2e2e;

    .title {
      flex: 1;
      color: rgba($color: #fff, $alpha: 0.85);
      padding-left: 20px;
    }

    .export {
      padding-right: 10px;
      .export-btn {
        span {
          padding: 5px 8px;
        }
      }
    }
  }

  .body {
    flex: 1;
    display: flex;
    height: 90%;
    background-color: #242424;

    &-left {
      display: flex;
      width: 432px;
      height: 100%;
      border-right: 1px solid #0f0f0f;

      .sidebar {
        width: 72px;
        border-right: 1px solid #0f0f0f;
        background: #2e2e2e;

        &-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 84px;
          color: rgba($color: #fff, $alpha: 0.45);
          cursor: pointer;

          .icon-box {
            .iconfont {
              font-size: 30px;
            }
          }
          .name {
            font-size: 12px;
          }
        }

        .active {
          background-color: #242424;
          color: #11bbf5;
        }
      }

      .bar-content {
        width: 360px;
        height: 100%;
        overflow: hidden;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 4px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.2);
        }
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
          border-radius: 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .content-list {
          display: flex;
          justify-content: center;
          width: 100%;
          padding-top: 20px;

          .list-box {
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

              .active {
                border: 3px solid #00a2dd;
              }

              .name {
                font-size: 12px;
                color: rgba($color: #fff, $alpha: 0.45);
                padding-top: 5px;
              }
            }
          }
        }
      }
    }

    &-right {
      flex: 1;
    }
  }
}
</style>

<template>
  <div ref="threejsCreater" class="threejs-creater">
    <canvas
      id="canvas"
      ref="canvas"
      class="canvas"
      :style="canvasStyle"
    ></canvas>
    <div class="operating-tips-box">
      <div class="tips-wrap">
        <!-- <div class="tips-title">操作提示:</div> -->
        <div class="tips-row">
          <div class="operating">人物旋转</div>
          <div class="tips">鼠标左键</div>
        </div>
        <div class="tips-row">
          <div class="operating">镜头缩放</div>
          <div class="tips">鼠标滚轮</div>
        </div>
        <div class="tips-row">
          <div class="operating">镜头平移</div>
          <div class="tips">鼠标右键</div>
        </div>
        <div class="tips-row">
          <div class="operating">镜头上移</div>
          <div class="tips">shift + ↑</div>
        </div>
        <div class="tips-row">
          <div class="operating">镜头下移</div>
          <div class="tips">shift + ↓</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
export default {
  data () {
    return {
      scene: null,
      camera: null,
      renderer: null,
      modelGroup: null,
      controls: null,
      timer: null,
      canvasStyle: null,
      animations: null,
      mixer: null,
      publicPath: process.env.BASE_URL,
      face_ao: `${process.env.BASE_URL}resources/base/face_ao.jpg`,
      face_roughness: `${process.env.BASE_URL}resources/base/roughness.jpg`,
      eye: `${process.env.BASE_URL}resources/base/eye-01-mask.jpg`,
      animationsGlb: `${process.env.BASE_URL}resources/base/MaleIdle.glb`,
      position_y: -1, // 模型y轴位置
      skinColor: '#996144', // 皮肤颜色
      hairColor: '#050505', // 头发颜色
      hair_model: null, // 发型模型
      head_model: null, // 脸型模型
      body_model: null, // 服饰模型
      glasses_model: null, // 眼镜模型
      sceneObj_model: null, // 场景模型
      floor_model: null, // 默认的地板
      hair_: null, // 发型资源地址
      hair_base_: null, // 发型底图资源地址
      head_: null, // 脸型资源地址
      body_: null, // 服饰资源地址
      glasses_: null, // 眼镜资源地址
      sceneObj_: null // 场景资源对象
    };
  },
  props: {
    // 发型资源地址
    hair: {
      type: String
    },
    // 发型底图资源地址
    hair_base: {
      type: String,
      default: `${process.env.BASE_URL}resources/base/hair_base.jfif`
    },
    // 脸型资源地址
    head: {
      type: String,
      default: `${process.env.BASE_URL}resources/base/head.glb`
    },
    // 服饰资源地址
    body: {
      type: String,
      default: `${process.env.BASE_URL}resources/base/body.glb`
    },
    // 妆容资源地址
    makeup: {
      type: String
    },
    // 眼镜资源地址
    glasses: {
      type: String
    },
    // 场景资源对象
    sceneObj: {
      type: Object
    }
  },
  watch: {
    hair: {
      handler (newValue) {
        if (newValue) {
          this.hair_ = this.hair;
          this.createHair();
        } else {
          this.removeHair();
        }
      },
      immediate: true
    },
    hair_base: {
      handler (newValue) {
        if (newValue) {
          this.hair_base_ = this.hair_base;
        } else {
          this.hair_base_ = `${process.env.BASE_URL}resources/base/hair_base.jfif`;
        }
        this.createHead();
      },
      immediate: true
    },
    head: {
      handler (newValue) {
        if (newValue) {
          this.head_ = this.head;
        } else {
          this.head_ = `${process.env.BASE_URL}resources/base/head.glb`;
        }
        this.createHead();
      },
      immediate: true
    },
    body: {
      handler (newValue) {
        if (newValue) {
          this.body_ = this.body;
        } else {
          this.body_ = `${process.env.BASE_URL}resources/base/body.glb`;
        }
        this.createBody();
      },
      immediate: true
    },
    makeup: {
      handler (newValue) {
        this.createHead();
      },
      immediate: true
    },
    glasses: {
      handler (newValue) {
        if (newValue) {
          this.glasses_ = this.glasses;
          this.createGlasses();
        } else {
          this.removeGlasses();
        }
      },
      immediate: true
    },
    sceneObj: {
      handler (newValue) {
        if (newValue && newValue.glb) {
          this.sceneObj_ = this.sceneObj;
          this.createScene();
        } else {
          this.removeScene();
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.initCanvas();
    this.init();
  },
  methods: {
    initCanvas () {
      window.onresize = this.updateCanvas;
      this.updateCanvas();
    },
    updateCanvas () {
      const threejsCreater = this.$refs.threejsCreater;
      const width = threejsCreater.clientWidth;
      const height = threejsCreater.clientHeight;
      this.canvasStyle = {
        width: width + 'px',
        height: height + 'px'
      };
    },
    /** 创建场景 */
    async initScene () {
      const scene = new THREE.Scene();
      // new RGBELoader().load(
      //   `${process.env.BASE_URL}resources/base/map_5_2.hdr`,
      //   function (texture) {
      //     texture.mapping = THREE.EquirectangularReflectionMapping;
      //     scene.background = texture; // 注意这里背景贴图要加上
      //     scene.environment = texture;
      //   }
      // );
      this.scene = scene;
      this.modelGroup = new THREE.Object3D();
      this.scene.add(this.modelGroup);

      // const hdrLoader = new RGBELoader();
      // const envMap = await hdrLoader.loadAsync(
      //   `${process.env.BASE_URL}resources/scene/scene2/scene.hdr`
      // );
      // envMap.mapping = THREE.EquirectangularReflectionMapping;

      // const env = new GroundProjectedEnv(envMap);
      // env.scale.setScalar(100);
      // scene.add(env);

      // scene.environment = envMap;
    },

    /** 创建相机 */
    initCamera () {
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 3;
      camera.position.x = 0;
      camera.position.y = 0;

      // const width = window.innerWidth; // 窗口宽度
      // const height = window.innerHeight; // 窗口高度
      // const k = width / height; // 窗口宽高比
      // const s = 1.5; // 三维场景显示范围控制系数，系数越大，显示的范围越大
      // // 创建相机对象
      // const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      // camera.position.set(0, 0, 200); // 设置相机位置
      // camera.lookAt(new THREE.Vector3(0, 0, 0)); // 设置相机方向(指向的场景对象)

      this.camera = camera;
    },

    /** 创建渲染器 */
    initRenderer () {
      const canvas = document.querySelector('#canvas');
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true // 抗齿距
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.shadowMap.enabled = true; // 投射阴影
      renderer.shadowMap.type = THREE.PCFShadowMap;
      renderer.setPixelRatio(window.devicePixelRatio);
      this.$refs.threejsCreater.appendChild(renderer.domElement);
      this.renderer = renderer;

      const controls = new OrbitControls(this.camera, renderer.domElement);
      controls.maxPolarAngle = Math.PI / 2;
      controls.minPolarAngle = Math.PI / 3;
      controls.enableDamping = true;
      // controls.enablePan = false;
      controls.dampingFactor = 0.1;
      controls.autoRotate = false; // Toggle this if you'd like the chair to automatically rotate
      controls.autoRotateSpeed = 0.2; // 30
      controls.minDistance = 1;
      controls.maxDistance = 20;
      this.controls = controls;
      this.controls.saveState();
      this.addEvent();
    },

    controlsReset () {
      this.controls.reset();
      this.scene.position.y = 0;
    },

    addEvent () {
      // 模拟组合键触发函数
      let code1 = null;
      let code2 = null;
      const keyMap = {
        shift: 16,
        up: 38,
        down: 40
      };
      document.onkeydown = (e) => {
        const evn = e || event;
        const key = evn.keyCode || evn.which || evn.charCode;
        if (key === keyMap.shift) {
          code1 = key;
        }
        if (key === keyMap.up || key === keyMap.down) {
          code2 = key;
        }
        if (code1 === keyMap.shift && code2 === keyMap.up) {
          console.log('上移');
          this.createTimer(this.sceneUp);
          // this obj to do something
        } else if (code1 === keyMap.shift && code2 === keyMap.down) {
          console.log('下移');
          this.createTimer(this.sceneDown);
        }
      };
      document.onkeyup = (e) => {
        const evn = e || event;
        const key = evn.keyCode || evn.which || evn.charCode;
        if (key === code1) {
          code1 = null;
          this.clearTimer();
        }
        if (key === keyMap.up || key === keyMap.down) {
          code2 = null;
          this.clearTimer();
        }
      };
    },

    createTimer (fun) {
      if (this.timer) {
        return;
      }
      const timer = setInterval(() => {
        fun();
      }, 10);
      this.timer = timer;
    },

    clearTimer () {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    sceneUp () {
      // const y = this.scene.position.y + 0.5;
      this.scene.translateY(0.01);
    },
    sceneDown () {
      // const y = this.scene.position.y - 0.5;
      this.scene.translateY(-0.01);
    },

    /** 创建光源 */
    initLight () {
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
      hemiLight.position.set(0, 50, 0);
      // Add hemisphere light to scene
      this.scene.add(hemiLight);

      // const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      // dirLight.position.set(0.1, 3, 0);
      // // dirLight.castShadow = true;
      // this.scene.add(dirLight);

      const dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
      dirLight1.position.set(5, 5, 5);
      dirLight1.castShadow = true;
      this.scene.add(dirLight1);

      // const dirLight2 = new THREE.SpotLight(0xffffff, 1);
      // dirLight2.position.set(0, 0, -10);
      // dirLight2.castShadow = true;
      // this.scene.add(dirLight2);

      // const dirLight3 = new THREE.PointLight(0xffffff, 1);
      // dirLight3.position.set(0.5, 0, 0);
      // dirLight3.castShadow = true;
      // this.scene.add(dirLight3);
    },
    /** 初始化 */
    init () {
      this.initScene();
      this.initCamera();
      this.initRenderer();

      this.clock = new THREE.Clock();
      this.initMesh();
      this.initLight();
      // this.initFloor();

      this.update();
    },

    update () {
      if (this.mixer) {
        // 更新动画 根据clock确保不会因为帧率导致动画变快或变慢
        this.mixer.update(this.clock.getDelta());
      }
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        const canvas = this.renderer.domElement;
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.update);
    },

    resizeRendererToDisplaySize (renderer) {
      const canvas = renderer.domElement;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const canvasPixelWidth = canvas.width / window.devicePixelRatio;
      const canvasPixelHeight = canvas.height / window.devicePixelRatio;

      const needResize =
        canvasPixelWidth !== width || canvasPixelHeight !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    },
    /** 创建网格模型对象 */
    initMesh () {
      // this.createBody();
      // this.createHead();
      // this.createHair();
      // this.createScene();

      const texture = new THREE.TextureLoader().load(
        `${process.env.BASE_URL}resources/base/floor.png`
      );
      const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        transparent: true,
        opacity: 0.3
      });

      const geometry = new THREE.PlaneGeometry(20, 20);
      const floorMesh = new THREE.Mesh(geometry, material);
      floorMesh.receiveShadow = true;
      floorMesh.rotation.x = -Math.PI / 2;
      floorMesh.position.y = -1;
      floorMesh.visible = true;
      this.floor_model = floorMesh;
      this.scene.add(floorMesh);
    },

    /** 创建贴图 */
    createTextur () {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;

      const ctx = canvas.getContext('2d');

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = this.hair_base_;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, 1024, 1024);

          if (this.makeup) {
            const img1 = new Image();
            img1.src = this.makeup;
            img1.onload = function () {
              ctx.drawImage(img1, 0, 0, 1024, 1024);
              const texture = new THREE.Texture(
                canvas,
                THREE.UVMapping,
                THREE.RepeatWrapping,
                THREE.RepeatWrapping
              );
              texture.needsUpdate = true;

              texture.flipY = false;

              resolve(texture);
            };
          } else {
            const texture = new THREE.Texture(
              canvas,
              THREE.UVMapping,
              THREE.RepeatWrapping,
              THREE.RepeatWrapping
            );
            texture.needsUpdate = true;

            texture.flipY = false;

            resolve(texture);
          }
        };
      });

      // const texture_hair_base = new THREE.TextureLoader().load(this.hair_base_);
      // texture_hair_base.flipY = false;
      // return texture_hair_base;
    },

    getAnimations () {
      const loader = new GLTFLoader();
      return new Promise((resolve, reject) => {
        if (this.animations) {
          resolve(this.animations);
        } else {
          loader.load(this.animationsGlb, (gltf) => {
            console.log(gltf.animations);
            resolve(gltf.animations);
          });
        }
      });
    },

    async createAnimation () {
      if (this.body_model && this.head_model) {
        this.animations = await this.getAnimations();
        if (this.animations && this.animations.length > 0) {
        // 获取模型动作混合器
          const mixer = new THREE.AnimationMixer(this.modelGroup);
          this.animations.forEach((ele, index) => {
            let clip = THREE.AnimationClip.findByName(this.animations, ele.name);
            clip = mixer.clipAction(clip);
            if (index === 0) {
              clip.reset();
              clip.play();
            }
            return clip;
          });
          this.mixer = mixer;
        }
      }
    },

    createBody () {
      const loader = new GLTFLoader();
      loader.load(this.body_, (gltf) => {
        if (this.body_model) {
          this.modelGroup.remove(this.body_model);
        }
        const model = gltf.scene;
        this.body_model = model;
        this.modelGroup.add(model);
        model.position.y = this.position_y;
        model.traverse((o) => {
          if (o.isMesh && o.name === 'Wolf3D_Body') {
            o.material.color = new THREE.Color(new THREE.Color(this.skinColor));
          }
          if (o.isMesh) {
            o.castShadow = true;
            // o.receiveShadow = true;
          }
        });
        // this.createAnimation();
      });
    },

    async createHead () {
      if (!this.head_) {
        return;
      }
      const loader = new GLTFLoader();

      // 创建脸的material
      const texture_hair_base = await this.createTextur();
      const texture_face_ao = new THREE.TextureLoader().load(this.face_ao);
      const texture_face_roughness = new THREE.TextureLoader().load(
        this.face_roughness
      );
      const material_face = new THREE.MeshStandardMaterial({
        // color: new THREE.Color(new THREE.Color(this.skinColor)),
        // side: THREE.DoubleSide,
        map: texture_hair_base,
        aoMap: texture_face_ao,
        roughness: 0.5,
        roughnessMap: texture_face_roughness
      });

      // 创建眼睛的material
      const texture_eye = new THREE.TextureLoader().load(this.eye);
      const material_eye = new THREE.MeshPhysicalMaterial({
        map: texture_eye
      });

      loader.load(this.head_, (gltf) => {
        if (this.head_model) {
          this.modelGroup.remove(this.head_model);
        }
        const model = gltf.scene;
        this.head_model = model;
        this.modelGroup.add(model);
        model.position.y = this.position_y + 1.55;
        model.position.z = 0.04;
        model.traverse((o) => {
          if (o.isMesh && o.name === 'Wolf3D_Head_1') {
            // 启用投射和接收阴影的能力
            o.castShadow = true;
            // o.receiveShadow = true;
            // console.log(o.material, material_face);
            // o.material.map = texture_hair_base;
            o.material = material_face;
          } else if (o.isMesh && o.name === 'Wolf3D_Head_2') {
            // 启用投射和接收阴影的能力
            o.castShadow = true;
            // o.receiveShadow = true;
            o.material = material_eye;
          }
        });
        // this.createAnimation();
      });
    },

    createHair () {
      if (!this.hair_) {
        return;
      }
      const loader = new GLTFLoader();
      loader.load(this.hair_, (gltf) => {
        if (this.hair_model) {
          this.modelGroup.remove(this.hair_model);
        }
        const model = gltf.scene;
        this.hair_model = model;
        this.modelGroup.add(model);
        model.position.y = this.position_y + 1.55;
        model.position.z = 0.04;
        model.traverse((o) => {
          if (o.isMesh) {
            o.material.color = new THREE.Color(this.hairColor);
          }
        });
      });
    },

    removeHair () {
      if (this.hair_model) {
        this.modelGroup.remove(this.hair_model);
        this.hair_model = null;
      }
    },

    createGlasses () {
      if (!this.glasses_) {
        return;
      }
      const loader = new GLTFLoader();
      loader.load(this.glasses_, (gltf) => {
        if (this.glasses_model) {
          this.modelGroup.remove(this.glasses_model);
        }
        const model = gltf.scene;
        this.glasses_model = model;
        this.modelGroup.add(model);
        model.position.y = this.position_y + 1.55;
        model.position.z = 0.04;
      });
    },

    removeGlasses () {
      if (this.glasses_model) {
        this.modelGroup.remove(this.glasses_model);
        this.glasses_model = null;
      }
    },

    createScene () {
      const loader = new GLTFLoader();
      const { glb, data } = this.sceneObj_;
      loader.load(glb, (gltf) => {
        this.floor_model.visible = false;
        if (this.removeScene_model) {
          this.scene.remove(this.removeScene_model);
        }
        const model = gltf.scene;
        this.removeScene_model = model;
        this.scene.add(model);

        Object.keys(data).forEach((key) => {
          if (key === 'scaleX') {
            model.scale.x = data[key];
          } else if (key === 'scaleY') {
            model.scale.y = data[key];
          } else if (key === 'scaleZ') {
            model.scale.z = data[key];
          } else if (key === 'positionY') {
            model.position.y = data[key];
          } else if (key === 'positionZ') {
            model.position.z = data[key];
          } else if (key === 'rotateY') {
            model.rotateY(data[key]);
          }
        });

        model.traverse((o) => {
          if (o.isMesh) {
            o.receiveShadow = true;
          }
        });
      });
    },

    removeScene () {
      if (this.removeScene_model) {
        this.scene.remove(this.removeScene_model);
        this.removeScene_model = null;
      }
      if (this.floor_model) {
        this.floor_model.visible = true;
      }
    },

    // 导出模型
    exportModel () {
      const gltfExporter = new GLTFExporter();
      const options = {
        trs: true,
        onlyVisible: true,
        binary: false,
        maxTextureSize: Infinity
      };

      gltfExporter.parse(
        this.modelGroup,
        (result) => {
          if (result instanceof ArrayBuffer) {
            // result即为glb模型
            this.saveModel(
              new Blob([result], { type: 'application/octet-stream' }),
              'scene.glb'
            );
          } else {
            const output = JSON.stringify(result, null, 2);
            this.saveModel(
              new Blob([output], { type: 'text/plain' }),
              'scene.gltf'
            );
          }
        },
        undefined,
        options
      );
    },

    saveModel (blob, filename) {
      const link = document.createElement('a');
      link.style.display = 'none';
      document.body.appendChild(link); // Firefox workaround, see #6594

      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    }
  }
};
</script>
<style lang="scss" scoped>
.threejs-creater {
  position: relative;
  width: 100%;
  height: 100%;
  .canvas {
    display: block;
    touch-action: none;
  }

  .operating-tips-box {
    position: absolute;
    z-index: 999;
    top: 0;
    right: 0;

    .tips-wrap {
      width: 160px;
      padding-top: 20px;
      padding-right: 10px;

      .tips-title {
        color: #fff;
      }

      .tips-row {
        display: flex;
        width: 100%;
        line-height: 34px;
        color: rgba($color: #fff, $alpha: 0.65);

        .tips {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>

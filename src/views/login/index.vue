<template>
  <div class="login">
    <div class="login-box">
      <div class="logo">METAHUMAN</div>
      <div class="bg-box">
        <el-form
          ref="loginForm"
          :rules="rules"
          :model="formLogin"
          class="login-form"
        >
          <el-form-item prop="username" class="login-form-item">
            <el-input
              type="text"
              v-model="formLogin.username"
              placeholder="用户名"
            >
              <i slot="prepend" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-form-item">
            <el-input
              type="password"
              v-model="formLogin.password"
              placeholder="密码"
            >
              <i slot="prepend" class="el-icon-key"></i>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" class="button" @click="submit">
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/user';
export default {
  data () {
    return {
      // 表单校验
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      // 表单
      formLogin: {
        username: 'zzf',
        password: '123456'
      }
    };
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const data = {
            name: this.formLogin.username,
            password: this.formLogin.password
          };
          login(data)
            .then((res) => {
              if (res) {
                this.$router.push('/');
              }
            })
            .catch((res) => {
              console.log(res);
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;

  .login-box {
    padding: 60px 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 460px;
    height: 720px;
    display: inline-block;
    margin: auto;

    .logo {
      width: 100%;
      height: 80px;
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      color: rgba($color: #fff, $alpha: 0.85);
    }

    .bg-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: #242424;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      padding: 40px 32px;

      .login-form {
        width: 100%;

        .login-form-item {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          margin-bottom: 40px;
          background: #1a1a1a;

          ::v-deep {
            .el-input-group__prepend,
            .el-input__inner {
              background: #1a1a1a;
              border: 1px solid #1a1a1a;
            }
          }
        }
      }

      .button {
        width: 100%;
        height: 36px;
      }
    }
  }
}
</style>

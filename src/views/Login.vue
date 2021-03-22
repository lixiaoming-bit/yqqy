<template>
  <div class="login-wrap" :style="{ backgroundImage: `url(${backgroundImgUrl})` }">
    <div class="gauss-blur">
      <div class="login">
        <h2 class="text-white">Hello, 轻语</h2>
        <mu-container>
          <mu-form ref="form" :model="validateForm" class="mu-demo-form">
            <mu-form-item label="登录令牌" prop="password" :rules="passwordRules">
              <mu-text-field
                autocomplete
                type="password"
                v-model.trim="validateForm.password"
                prop="password"
              ></mu-text-field>
            </mu-form-item>
            <!-- <mu-form-item prop="isAgree" :rules="argeeRules">
        <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
      </mu-form-item> -->
            <mu-button large @click="submit" full-width v-elevation="0" color="primary">
              提交
            </mu-button>
            <mu-button large @click="clear" full-width style="margin-top: 20px" v-elevation="0">
              重置
            </mu-button>
          </mu-form>
        </mu-container>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      backgroundImgUrl: require('@/assets/img/login-bg.jpg'),
      usernameRules: [{ validate: val => val.length >= 3, message: '用户名长度大于3' }],
      passwordRules: [
        { validate: val => !!val, message: '请输入登录令牌' },
        { validate: val => val.length === 40, message: '登录令牌长度不正确' },
        {
          validate: val => /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(val),
          message: '登录令牌为数字与英文的集合'
        }
      ],
      argeeRules: [{ validate: val => !!val, message: '必须同意用户协议' }],
      validateForm: {
        password: 'd1dbWMRXF4k5wRIdrouwirZXkLTTzOiQyGBjsyqI'
      }
    }
  },
  mounted() {
    this.$el.style.height = window.innerHeight + 'px'
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    ...mapActions(['getUserInfo']),
    submit() {
      this.$refs.form.validate().then(valid => {
        if (valid) {
          // 请求接口数据
          this.SET_TOKEN(this.validateForm.password)
          this.getUserInfo().then(res => {
            if (res) {
              const delayTime = 60 * 60 * 1000 * 24 * 30
              this.$ls.set('TOEKN', this.validateForm.password, delayTime)
              this.$router.push({ path: '/' })
            }
          })
        }
      })
    },
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        password: ''
      }
    }
  }
}
</script>
<style>
.text-white {
  color: #f1f2f3;
}
.login-wrap {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}
.gauss-blur {
  height: 100%;
  width: 100%;
  backdrop-filter: blur(12px);
}
.login {
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>

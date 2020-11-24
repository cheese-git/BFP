<template>
  <b-container>
    <b-nav tabs>
      <b-nav-item to="/login"> 登陆</b-nav-item>
      <b-nav-item active>注册</b-nav-item>
    </b-nav>
    <b-form>
      <email-input v-model.trim="username" />
      <ValidationProvider name="昵称" rules="min:4" v-slot="{ errors }">
        <b-form-group
          label="昵称"
          :state="!errors[0]"
          :invalid-feedback="errors[0]"
        >
          <b-form-input
            placeholder="请输入昵称"
            v-model="nickName"
          ></b-form-input>
        </b-form-group>
      </ValidationProvider>
      <pwd-input v-model="pwd" />
      <ValidationProvider
        name="确认密码"
        rules="required|confirmPwd"
        v-slot="{ errors }"
      >
        <b-form-group
          label="确认密码"
          :state="!errors[0]"
          :invalid-feedback="errors[0]"
        >
          <b-form-input
            type="password"
            v-model="pwdConfirmed"
            required
          ></b-form-input>
        </b-form-group>
      </ValidationProvider>
      <captcha-text-input v-model.trim="captchaText" />

      <b-button type="submit" variant="primary">立即注册</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import EmailInput from '@/components/EmailInput.vue'
import PwdInput from '@/components/PwdInput.vue'
import CaptchaTextInput from '@/components/CaptchaTextInput.vue'
import { extend } from "vee-validate"



export default Vue.extend({
  data() {
    return {
      username: '',
      pwd: '',
      pwdConfirmed: '',
      captchaText: '',
      nickName: ''
    }
  },
  mounted() {
    extend('confirmPwd', value => {
      if (value === this.pwd) {
        return true
      }
      return '两次密码不一致'
    })
  },
  components: {
    EmailInput,
    PwdInput,
    CaptchaTextInput
  }
})
</script>
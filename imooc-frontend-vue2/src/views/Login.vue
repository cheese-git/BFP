<template>
  <b-container>
    <b-nav tabs>
      <b-nav-item active> 登陆</b-nav-item>
      <b-nav-item to="/register">注册</b-nav-item>
    </b-nav>
    <b-form>
      <email-input v-model.trim="username" />
      <pwd-input v-model.trim="pwd" />
      <captcha-text-input v-model.trim="captchaText" />

      <b-button type="submit" variant="primary">登陆</b-button>
      <b-link><router-link to="forget-pwd">找回密码</router-link></b-link>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import EmailInput from '@/components/EmailInput.vue'
import PwdInput from '@/components/PwdInput.vue'
import CaptchaTextInput from '@/components/CaptchaTextInput.vue'

export default Vue.extend({
  data() {
    return {
      username: '',
      pwd: '',
      captchaText: ''
    }
  },

  components: { EmailInput, PwdInput, CaptchaTextInput }
})
</script>

<style>
</style>
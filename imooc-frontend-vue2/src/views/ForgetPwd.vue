<template>
  <b-container>
    <b-nav tabs>
      <b-nav-item to="/login">登陆</b-nav-item>
      <b-nav-item to="/register">注册</b-nav-item>
      <b-nav-item active>找回密码</b-nav-item>
    </b-nav>
    <b-form>
      <email-input v-model.trim="username" />
      <captcha-text-input v-model.trim="captchaText" />
      <b-button type="submit" variant="primary">找回密码</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import EmailInput from '@/components/EmailInput.vue'
import CaptchaTextInput from '@/components/CaptchaTextInput.vue'

export default Vue.extend({
  data() {
    return {
      username: '',
      captchaText: ''
    }
  },
  components: {
    EmailInput,
    CaptchaTextInput
  }
})
</script>
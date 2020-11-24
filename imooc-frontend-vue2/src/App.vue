<template>
  <b-container>
    <b-form>
      <ValidationProvider
        name="邮箱"
        rules="required|email"
        v-slot="{ errors }"
      >
        <b-form-group
          label="邮箱"
          :invalid-feedback="errors[0]"
          :state="!errors[0]"
        >
          <b-form-input
            v-model="username"
            placeholder="请输入电子邮箱"
          ></b-form-input>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        name="密码"
        rules="required|min:6|max:128"
        v-slot="{ errors }"
      >
        <b-form-group
          label="密码"
          :state="!errors[0]"
          :invalid-feedback="errors[0]"
        >
          <b-input type="password" v-model="pwd"></b-input>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider
        name="验证码"
        rules="required|length:4"
        v-slot="{ errors }"
      >
        <b-form-group
          label="验证码"
          :state="!errors[0]"
          :invalid-feedback="errors[0]"
        >
          <b-input-group>
            <b-input v-model="captchaText"></b-input>
            <b-input-group-append
              @click="getCaptcha()"
              v-html="captchaSVG"
              class="svg-captcha"
            ></b-input-group-append>
          </b-input-group>
        </b-form-group>
      </ValidationProvider>
      <b-button type="submit" variant="primary">登陆</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './validate'
import { ValidationProvider } from "vee-validate"

export default Vue.extend({
  data() {
    return {
      username: '',
      pwd: '',
      captchaText: '',
      captchaSVG: ''
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods: {
    async getCaptcha() {
      const res = await fetch('http://localhost:3000/captcha').then(res => res.json())
      this.captchaSVG = res.data
    },
  },
  components: {
    ValidationProvider
  }
})
</script>

<style lang="scss">
.svg-captcha {
  position: relative;
  top: -13px;
}
</style>

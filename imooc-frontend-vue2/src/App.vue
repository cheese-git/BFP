<template>
  <b-container>
    <b-form>
      <b-form-group label="用户名">
        <b-input></b-input>
      </b-form-group>
      <b-form-group label="密码">
        <b-input type="password"></b-input>
      </b-form-group>
      <b-form-group label="验证码">
        <b-input-group>
          <b-input></b-input>
          <b-input-append v-html="captchaSVG"></b-input-append>
        </b-input-group>
      </b-form-group>
      <b-button type="submit" variant="primary">登陆</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({
  data() {
    return {
      captchaSVG: ''
    }
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/captcha').then(res => res.json())
    this.captchaSVG = res.data
  }
})
</script>

<style lang="scss">
</style>

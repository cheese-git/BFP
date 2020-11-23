<template>
  <div>
    <b-form>
      <b-form-group label="用户名">
        <b-input></b-input>
      </b-form-group>
      <b-form-group label="密码">
        <b-input type="password"></b-input>
      </b-form-group>
      <b-form-group label="验证码">
        <b-input></b-input>
      </b-form-group>
      <b-button type="submit" variant="primary">登陆</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default Vue.extend({

})
</script>

<style lang="scss">
</style>

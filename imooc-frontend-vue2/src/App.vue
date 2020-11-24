<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './validate'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default Vue.extend({
  components: {
    AppHeader,
    AppFooter
  }

})
</script>

<style lang="scss">
.svg-captcha {
  position: relative;
  top: -13px;
}
</style>

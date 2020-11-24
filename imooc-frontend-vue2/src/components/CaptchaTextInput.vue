<template>
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
        <b-input :value="value" @input="$emit('input', $event)"></b-input>
        <b-input-group-append
          @click="getCaptcha()"
          v-html="captchaSvg"
          class="svg-captcha"
        ></b-input-group-append>
      </b-input-group>
    </b-form-group>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'
import apiFetch from '@/api-fetch'

export default Vue.extend({
  data() {
    return {
      captchaSvg: ''
    }
  },
  props: ['value'],
  mounted() {
    this.getCaptcha()
  },
  methods: {
    async getCaptcha() {
      const res = await apiFetch('captcha')
      this.captchaSvg = res.data
    },
  },
})
</script>
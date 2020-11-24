<template>
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
      <b-input
        type="password"
        :value="value"
        @input="$emit('input', $event)"
      ></b-input>
    </b-form-group>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['value']
})
</script>
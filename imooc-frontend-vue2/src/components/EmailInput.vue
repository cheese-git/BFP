<template>
  <ValidationProvider name="邮箱" rules="required|email" v-slot="{ errors }">
    <b-form-group
      label="邮箱"
      :invalid-feedback="errors[0]"
      :state="!errors[0]"
    >
      <b-form-input
        :value="value"
        placeholder="请输入电子邮箱"
        @input="$emit('input', $event)"
      ></b-form-input>
    </b-form-group>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['value']
})
</script>
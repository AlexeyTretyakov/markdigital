<template>
  <div class="logo-img" :class="theme">
    <img src="./logo.png" width=130px alt="logo"/>
  </div>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  props: {
    theme: { type: String, default: "" },
  },
})
</script>

<style lang="less">
.logo-img {
  // width: 130px; 
  &:hover {
    .logo-img {
      width: 135px;
    }
  }
}
</style>
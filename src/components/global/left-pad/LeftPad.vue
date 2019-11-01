<template>
  <div class="left-pad-container">
    <div class="left-pad">
      <slot name="left-pad-detail" />
    </div>
  </div>
</template>

<script>
// import MapWrapCorner from "@/components/global/map-wrap-corner";
export default {
  name: "",
  components: {
    // MapWrapCorner
  }
};
</script>

<style scoped lang="scss">
.left-pad-container {
  .left-pad {
    width: 360px;
    height: 859px;
    position: absolute;
    top: 15px;
    left: 20px;
    background: url("../../../assets/images/left_pad_bg.png") no-repeat 0 0;
  }
}
</style>
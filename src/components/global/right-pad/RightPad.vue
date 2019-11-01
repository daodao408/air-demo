<template>
  <div class="right-pad-container">
    <div class="right-pad" :class="folded ? 'folded_pad':'folded_pad_back'">
      <div class="arrow-container" @click="foldPad">
        <img :class="folded ? 'arrow_inverse': 'arrow_inverse_back'" src="../../../assets/images/双箭头.png" alt="">
      </div>
      <slot name="right-pad-detail" />
    </div>
  </div>
</template>

<script>
// import MapWrapCorner from "@/components/global/map-wrap-corner";
export default {
  name: "",
  components: {
    // MapWrapCorner
  },
  data() {
    return {
      folded: false,
    }
  },
  mounted() {},
  methods: {
    foldPad() {
      // 折叠右侧pad
      this.folded = !this.folded
    }
  }
};
</script>

<style scoped lang="scss">
.right-pad-container {
  .right-pad {
    width: 298px;
    height: 851px;
    position: absolute;
    top: 15px;
    right: -37px;
    background: url("../../../assets/images/right_pad_bg.png") no-repeat 0 0;
    .arrow-container {
      height: 100%;
      width: 20px;
      float: left;
      cursor: pointer;
      img {
        position: relative;
        top: 47%;
        left: 3px;
        cursor: pointer;
      }
      .arrow_inverse{
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transition: transform .5s;
      }
      .arrow_inverse_back{
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transition: transform .5s;
      }
    }
  }
  .folded_pad {
    right: -298px !important;
    transition:right 500ms ease;
  }
  .folded_pad_back {
    right: -37px !important;
    transition:right 500ms ease;
  }
}
</style>
<template>
    <div class="info-pad">
        <div class="container">
            <slot name="info-pad-detail" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: '',
  components: {},
  computed: {},
  data() {
    return {
    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
.info-pad {
  width: 353px;
  height: 150px;
  position: absolute;
  background: url('../../assets/images/home-sj-related/标注弹窗.png') no-repeat center;
  .container {
    padding: 15px;
  }
}
</style>
<template>
  <div class="title-svg-mobile">
    - <span>{{ title }}</span> -
  </div>
</template>

<script>
  export default {
    name: 'RegionMobileTitle',
    props: {
      title: {
        type: String,
      },
    },
  }
</script>

<style lang="scss">
  @import "../styles/base.scss";
  .title-svg-mobile {
    color: #ffffff;
    font-size: 15vw;

    span {
      background: rgba(0, 0, 0, 0.2);
    }
  }
</style>

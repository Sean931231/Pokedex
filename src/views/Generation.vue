<template>
  <div>
    <h3> {{ this.$route.name }} </h3>
  </div>
</template>

<script>
  export default {
    name: "Generation",
    data() {
      return {
        key: 0
      }
    },
    methods: {
      name() {

      }
    },
  }
</script>

<style lang="scss">
  @import "../styles/generation.scss";
</style>

<template>
  <b-row class="home">
    <div class="grid-container">
      <div class="video">
        <div class="gameboy-back">

        </div>
      </div>
      <div class="top">top</div>
      <div class="bottom">bottom</div>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      images: [
        {
          url: [
            require('../assets/generation/generation_1.jpg'),
          ],
          caption: 'first pic'
        },
        {
          url: [
            require('../assets/generation/generation_2.jpg'),
          ],
          caption: 'second pic'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>

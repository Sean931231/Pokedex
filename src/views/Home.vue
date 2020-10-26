<template>
  <div class="home">
    <div class="title">
      <h1> PoKedex </h1>
    </div>
    <b-row align-h="center" align-v="center">
      <b-col cols="8">
        <div class="background-video">
          <video-background
            src="/video/ep1.mp4"
            style="height: 80vh; max-height: 800px;"
          >
          </video-background>
        </div>
      </b-col>
    </b-row>
    <b-row class="sticker">
      <b-col class="left">
        <b-img src="../assets/sticker/pikachu.png"></b-img>
      </b-col>
      <b-col class="right">
        <b-img src="../assets/sticker/gengar.png"></b-img>
      </b-col>
    </b-row>
  </div>
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

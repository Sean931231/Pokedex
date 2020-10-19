<template>
  <b-row class="home">
    <b-col>
      <!-- <b-row>
        <b-col class="title mb-5">
          <p> PoKedex </p>
        </b-col>
      </b-row> -->
      <b-row align-v="end" class="mt-5">
        <b-col class="sticker" cols="3">
          <b-img src="../assets/sticker/gengar.png" class="first"></b-img>
        </b-col>
        <b-col cols="6">
          <div class="video">
            <video-background
              :src="source"
              style="max-height: 500px; height: 100vh;"
              overlay="linear-gradient(45deg,#feebe530, #ffffff30)"
            >
              <h1 class="v-back-title">{{title}}</h1>
            </video-background>
          </div>
        </b-col>
        <b-col class="sticker" cols="3">
          <b-img src="../assets/sticker/pikachu.png" class="second"></b-img>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'Home',
  components: {
    VideoBackground
  },
  data() {
    return {
      title: "PoKedex",
      source: "../assets/video/ep1.mp4"
    }
  },
  mounted () {
    this.geturl()
  },
  methods: {
    geturl() {
      console.log(this.source);
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>

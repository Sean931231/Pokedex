<template>
<b-row>
  <div class="timeline">
    <div v-for="generation in generation_info" :key="generation.id">
      <div class="post" :class="generation.position" :id="generation.id">
        <div class="post-content">
          <h2> {{ generation.year }} </h2>
          <p> {{ generation.name }} </p>
          <img :src='"../assets/boxart/" + generation.id + ".jpg"' >
          <p> {{ generation.description }} </p>
        </div>
      </div>
    </div>
  </div>
</b-row>
</template>

<script>
  export default {
    name: "Generation",
    data() {
      return {
        generation_info: [],

      }
    },

    mounted () {
      this.getGenerationInfo();
    },

    methods: {
      getGenerationInfo() {
        this.$api
            .get("./json/generation.json")
            .then(response => {
              let result = response.data.generation_info;
              this.generation_info = result;
            })
      }
    },

    watch: {
      $route(to, from) {
       console.log(from);
       console.log(to);
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/generation.scss";
</style>

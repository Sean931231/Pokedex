<template>
  <div class="region">
    <b-row class="header-page">
      <b-col cols="12">
        <div class="page-title">
          <h1> {{this.$route.name}} </h1>
        </div>
      </b-col>
    </b-row>
    <b-row class="master-page pt-5 pb-5" align-h="center">
      <b-col
        md="4"
        lg="3"
        v-for="(region, index) in regions" :key="index"
      >
        <b-card
          :title="region.name"
          :img-src='"../assets/regionmap/"+ region.name +"-1.jpg"'
          img-alt="Region Map"
          img-top
          class="mb-5"
          >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Region',
    components: {

    },
    data() {
      return {
        regions: [],
        cards: 8
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init() {
        this.$api
            .request("https://pokeapi.co/api/v2/region/")
            .then(response => {
              this.regions = response.data.results;
            })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/region.scss";
</style>

<template>
  <div class="home">
    <b-container>
      <b-row class="region pt-2 mb-4">
        <b-col md="4" lg="3" v-for="(region, index) in regions" :key="region.key">
          <b-card-group deck>
            <b-card
              :title="region.name"
              :img-src='"../assets/regionmap/"+ region.name +"-1.jpg"'
              img-alt="Region Map"
              img-top
              class="mb-5">
              <!-- <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </b-card-text> -->
              <div class="button-position">
                <img src="../assets/svg/pokeball-2.svg" class="rolling-ball"/>
                <b-button @click="tour(index+1)" variant="primary">Tour</b-button>
              </div>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      regions: []
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
          // console.log(this.regions);
        })
    },

    tour(index, region) {
      this.$router.push ({
        name: 'Town',
        query: {
          id: index,
        }
      })
    }
  },
}
</script>

<style lang="scss">
  @import "../styles/home.scss";
</style>

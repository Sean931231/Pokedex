<template>
  <div class="region">
    <b-container>
      <b-row class="pt-4 mb-4">
        <b-col class="each-card" md="4" lg="3"
        v-for="(region, index) in regions"
        :key="region.key">
          <b-card-group deck>
            <b-card
              :title="region.name"
              :img-src='"../assets/regionmap/"+ region.name +"-1.jpg"'
              img-alt="Region Map"
              img-top
              class="mb-5">
              <div class="button-position">
                <img src="../assets/svg/pokeball-2.svg" class="rolling-ball"/>
                <b-button @click="tour(index+1)" variant="primary" class="tour-button">Tour</b-button>
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
  name: 'Region',
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
  @import "../styles/region.scss";
</style>

<template>
  <div class="home">
    <b-container fluid>
      <b-row class="region pt-2 mb-4">
        <b-col md="4" lg="3" v-for="(region, index) in regions" :key="region.key">
          <b-card-group deck>
            <b-card
              :title="region.name"
              :img-src='"../assets/regionmap/"+ region.name +"-1.jpg"'
              img-alt="Region Map"
              img-top
              class="mb-3">
              <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </b-card-text>
              <b-button @click="town(index+1, region.name)" variant="primary">Tour</b-button>
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
      regions: [],
      items: 10
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      this.$api
          .request("https://pokeapi.co/api/v2/region/", {id: 1})
          .then(response => {
            this.regions = response.data.results;
            // console.log(this.regions);
          })
    },

    town(index, region) {
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

<style lang="scss" scoped>
  @import "../styles/home.scss";
</style>

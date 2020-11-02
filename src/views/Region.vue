<template>
  <div class="region">
    <b-row class="header-page">
      <b-col cols="12">
        <div class="background-slide">

        </div>
        <div class="middle-content">
          <div class="content-title">
            <!-- {{this.$route.name}} -->
            <svgtitle />
            <span> Regions are areas in the Pokémon universe that are smaller parts of a nation. </span> <br/>
            <span>Region has their own Pokémon Professor, who provides a unique set of Starter Pokémon for young Trainers. </span>
          </div>
          <div class="scroll-button" @click="scrollToElement">
            <!-- <b-button @click="scrollToElement">
              click me
            </b-button> -->
            <downArrow class="downarrow"/>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="master-page pt-4 py-2">
      <b-container>
        <b-row class="pt-4 mb-4">
          <b-col class="each-card" md="4" lg="3"
            v-for="(region, index) in regions"
            :key="region.key"
            >
            <b-card-group deck>
              <b-card
                :img-src='"../assets/regionmap/"+ region.name +"-1.jpg"'
                img-alt="Region Map"
                img-top
                style="min-height: 17rem"
                class="mb-5">

                <div class="center-image">
                  <img :src='"../assets/character/gen"+ (index+1) +".png"' >
                </div>
                <div class="button-position">
                  <img src="../assets/svg/pokeball-2.svg" class="rolling-ball"/>
                  <b-button @click="tour(index+1)" variant="primary" class="tour-button">Tour</b-button>
                </div>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </div>
</template>

<script>
  import svgtitle from '@/components/regionSVG.vue';
  import downArrow from '@/components/downArrow.vue';
  export default {
    name: 'Region',
    components: {
      svgtitle,
      downArrow
    },
    data() {
      return {
        regions: [],
        regionImages: [
          {
            image: [
              require("../assets/regionmap/1.png"),
            ],
          },
          {
            image: [
              require("../assets/regionmap/2.png"),
            ],
          }
        ]
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
      },

      tour(index, region) {
        this.$router.push ({
          name: 'Town',
          query: {
            id: index,
          }
        })
      },

      scrollToElement() {
        const el = this.$el.getElementsByClassName('master-page')[0];

        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
      }
  }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/region.scss";
</style>

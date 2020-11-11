<template>
  <b-row class="town">
    <div class="curtain">
      <div class="left">
      </div>
      <div class="right">
      </div>
    </div>
    <div class="town-container">
      <div class="back">
        <b-button @click="$router.go(-1)"> BACK </b-button>
      </div>
      <div class="region-title my-3">
        <h1> - {{ this.TownUpperCase }} - </h1>
      </div>
      <div class="region-content my-5">
        <div class="first-part">
          <div class="map">
            <div class="town-map" :style="{ backgroundImage: 'url(' + this.map + ')' }" >
              <div class="layer"></div>
            </div>
          </div>
          <div class="description">
            <h1>INTRODUCTION</h1>
            <p v-html="this.townDescribe"></p>
            <a :href="this.infoSource">[source]</a>
          </div>
        </div>

        <div class="second-part">
          <div class="town-list my-5">
            <table class="list" border="solid">
              <tr>
                <th> English </th>
                <th> Japanese </th>
                <th> Slogan </th>
              </tr>
              <tr v-if="!towns">
                <td colspan="3"> In Progress </td>
              </tr>
              <tr v-for="(town, index) in towns" :key="index">
                <td @click="getTown(index, town.eng)"> {{town.eng}} </td>
                <td> {{town.jap}} </td>
                <td> {{town.slogan}} </td>
              </tr>
            </table>
          </div>
          <div class="town-img">
            <b-row>
              <b-col>
                <img :src="this.townLocationImage" @error="imgUrlAlt">
              </b-col>
              <b-col>
                <img :src="this.townLocationGif" @error="imgUrlAlt" >
              </b-col>
            </b-row>
            <div> Click on town name to change display </div>
          </div>
        </div>

        <div class="third-part">

        </div>
      </div>
    </div>
  </b-row>
</template>

<script>
  export default {
    name: 'Town',
    components: {

    },
    data() {
      return {
        /* all */
        regionIndex: this.$route.params.id,
        /* title */
        TownUpperCase: '',
        /* first part */
        map: '',
        townDescribe: '',
        infoSource: '',
        /* second part */
        towns: [],
        townLocationImage: '',
        townLocationGif: '',
        /* third part */

      }
    },
    mounted () {
      this.getGenInfo();
      this.getRegionInfo();
    },
    methods: {
      getGenInfo() {
        this.$api
            .request(`https://pokeapi.co/api/v2/region/${this.regionIndex}/`)
            .then(response => {
              // this.getTownNameUpperCase(response.data.name);
              let townName = response.data.name;
              this.getTownNameUpperCase(townName);

              let genGroup = response.data.main_generation;
              this.$api
                  .request(genGroup.url)
                  .then( result => {

                    // console.log(result.data);
                    // console.log(result.data.name);
                  })

            })
      },

      getRegionInfo() {
        this.$api
            .get("/json/town.json")
            .then(response => {
              this.town = response.data.region_info.find(element => element.id == this.regionIndex);
              // this.getTownNameUpperCase(this.town.region_name);
              this.townDescribe = this.town.region_description;
              this.map = this.town.map;
              this.infoSource = this.town['info-from'];
              this.towns = this.town.settlements;
            })
      },

      getTown(index, name) {
        // this.townLocationImage = `${index+1}.png`;
        // this.townLocationGif = `${index+1}.gif`;
        this.townLocationImage = require(`../assets/town/${this.regionIndex}/${index+1}.png`);
        this.townLocationGif = require(`../assets/town/${this.regionIndex}/${index+1}.gif`)
      },

      getTownNameUpperCase(townName) {
        let town = townName;
        this.TownUpperCase = (town.charAt(0).toUpperCase() + town.slice(1)) + ' Region';
      },

      imgUrlAlt(event) {
        event.target.src = require(`../assets/town/error1.png`);
      }
    },

    created() {

      this.townLocationImage = require(`../assets/town/${this.regionIndex}/1.png`);
      this.townLocationGif = require(`../assets/town/${this.regionIndex}/1.gif`)
      // this.townLocationImage = require(`../assets/town/${this.regionIndex}/${this.townLocationImage}`);
      // this.townLocationGif = require(`../assets/town/${this.regionIndex}/${this.townLocationGif}`)
    },
  }
</script>

<style lang="scss">
  @import "../styles/town.scss"
</style>

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

        <div class="second-part my-5">
          <div class="town-list">
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
                <td @click="getTown(town.eng, index)"> {{town.eng}} </td>
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
            <div class="function-desciption"> Click on "Town Name" to change display </div>
          </div>
        </div>

        <div class="third-part">
          <h1>MORE</h1>
          <div class="more-about">
            <div class="table-mode">
              <table class="list">
                <!-- <tr>
                  <th> Title </th>
                  <th>  </th>
                </tr> -->
                <tr>
                  <td> Main Generation </td>
                  <td> {{ mainGeneration.name }} </td>
                </tr>
                <tr>
                  <td> Game Version </td>
                  <td>
                    <span v-for="versionName in versionGroup" :key="versionName.key"> {{ versionName.name }}<br> </span>
                  </td>
                </tr>
                <tr>
                  <td> Starter Pokémon </td>
                  <td>
                    <div class="starter-pokemon" v-for="pokemon in starterPokemon" :key="pokemon.key">
                      <div class="pokemon-card">
                        <p class="id"> #{{pokemon.id}} </p>
                        <div class="img">
                          <img :src="pokemon.img" width="100%">
                        </div>
                        <div class="pokemon-info">
                          <p class="name"> {{ pokemon.name }} </p>
                          <div class="type"
                            v-for="type in pokemon.types"
                            :key="type.key"
                            :class="type.type.name"
                            >
                            <span>{{ type.type.name }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

          </div>
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
        mainGeneration: [],
        versionGroup: [],
        starterPokemon: [],
      }
    },
    created() {
      // this.townLocationImage = require(`../assets/town/${this.regionIndex}/1.png`);
      // this.townLocationGif = require(`../assets/town/${this.regionIndex}/1.gif`)
      // this.townLocationImage = require(`../assets/town/${this.regionIndex}/${this.townLocationImage}`);
      // this.townLocationGif = require(`../assets/town/${this.regionIndex}/${this.townLocationGif}`)
    },
    mounted () {
      this.getRegionInfo();
      this.getGenInfo();
    },
    methods: {
      getRegionInfo() {
        this.$api
            .get("/json/town.json")
            .then(response => {
              this.town = response.data.region_info.find(element => element.id == this.regionIndex);
              this.getTownNameUpperCase(this.town.region_name);
              this.townDescribe = this.town.region_description;
              this.map = this.town.map;
              this.infoSource = this.town['info-from'];
              this.towns = this.town.settlements;

              if (this.towns[0].left_image) {
                this.townLocationImage = require(`../assets/town/${this.regionIndex}/${this.towns[0].left_image}`);
              } else {
                this.townLocationImage = require(`../assets/town/error1.png`);
              }

              if (this.towns[0].right_image) {
                this.townLocationGif = require(`../assets/town/${this.regionIndex}/${this.towns[0].right_image}`);
              } else {
                this.townLocationGif = require(`../assets/town/error1.png`);
              }
            });
      },

      getTown(name, index) {
        let selected = index;
        this.$api
            .get("/json/town.json")
            .then( response => {
              let town = response.data.region_info.find(element => element.id == this.regionIndex);
              let townImage = town.settlements.find((element, index) => index == selected);

              if (townImage.left_image){
                this.townLocationImage = require(`../assets/town/${this.regionIndex}/${townImage.left_image}`);
              } else {
                this.townLocationImage = require(`../assets/town/error1.png`);
              }

              if (townImage.right_image){
                this.townLocationGif = require(`../assets/town/${this.regionIndex}/${townImage.right_image}`);
              } else {
                this.townLocationImage = require(`../assets/town/error1.png`);
              }
            })
      },

      getTownNameUpperCase(townName) {
        let town = townName;
        this.TownUpperCase = (town.charAt(0).toUpperCase() + town.slice(1)) + ' Region';
      },

      imgUrlAlt(event) {
        event.target.src = require(`../assets/town/error1.png`);
      },

      getGenInfo() {
        this.$api
            .request(`https://pokeapi.co/api/v2/region/${this.regionIndex}/`)
            .then(response => {
              if (response.status === 200) {
                let result = response.data
                this.mainGeneration = result.main_generation;
                this.versionGroup = result.version_groups;
                this.getStarterPokemon(this.mainGeneration.url);
              } else {
                console.log("Api meet up Problem");
                return false;
              }
            })
      },

      /* https://pokeapi.co/api/v2/generation/ */
      getStarterPokemon(url) {
        this.$api
            .get(url)
            .then( response => {
              // console.log(response.data);
              let result = response.data;
              let startPokemon = response.data.pokemon_species.slice(0,3);
              startPokemon.forEach(element => {
                this.getPokemonInfo(element);
              })
            })
      },

      getPokemonInfo(element) {
        this.$api
            .get(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
            .then( response => {
              let result = response.data

              this.starterPokemon.push({
                id: result.id,
                name: result.name,
                img: result.sprites.other["official-artwork"].front_default,
                types: result.types,
                item: result.held_items
              })
            })
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/town.scss";

  .grass {
    background-color: #78c850;
  }
  .fire {
    background-color: #f05030;
  }
  .water {
    background-color: #3898f8;
  }
  .poison {
    background-color: #b058a0;
  }
  .psychic {
    background-color: #f870a0;
  }
  .flying {
    background-color: #98a8f0;

  }
</style>

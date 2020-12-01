<template>
  <div class="pokemon">
    <p> {{this.$route.name}} Page</p>
    <h1> {{ this.$route.query.region }} </h1>
    <div class="grid-poke">
      <div class="poke-card" v-for="(pokemon, index) in pokemons" :key="pokemon.key">
        {{ index +1 }} ) {{ pokemon.name }}

        <b-img :src="pokemon.img"> </b-img>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pokemon',
    components: {

    },
    data() {
      return {
        pokemons: [],
        pokeimg: ''
      }
    },

    mounted () {
      this.getPokemon();
    },

    methods: {
      getPokemon() {
        if (this.$route.query != "") {
          this.$api
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response => {
                // console.log("1");
              // console.log(response.data.results);
              this.pokemons = response.data.results;
              this.pokemons.forEach((item, index) => {
                this.getFirst(index);
              });
            })
        } else {
          let genId = this.$route.query.generation;
          this.$api
              .get("https://pokeapi.co/api/v2/pokedex/"+genId+"/")
              .then(response => {
                // console.log("2");
                // console.log(response.data);
                // this.pokemons = response.data.pokemon_species;
              })
        }
      },

      getFirst(index) {
        this.$api
            .get(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
            .then(response => {
              console.log(response.data);

              this.pokemons[index].img = response.data.sprites.other['official-artwork'].front_default;
            })
      }
    },


  }
</script>

<style lang="scss">
  @import "../styles/pokemon.scss";
</style>

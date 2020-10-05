<template>
  <div>
    <p> pokemon Page</p>
    <h1> {{ this.$route.query.region }} </h1>
    <div v-for="(pokemon, index) in pokemons" :key="pokemon.key">
      {{ index +1 }} ) {{ pokemon.name }}
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
        pokemons: '',
        pokeimg: ''
      }
    },

    mounted () {
      this.getPokemon();
    },

    methods: {
      getPageInfo() {
        console.log("this is pokemon page!");
      },

      getPokemon() {
        if (this.$route.query != "") {
          this.$api
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response => {
                console.log("1");
              console.log(response.data.results);
              this.pokemons = response.data.results;
            })
        } else {
          let genId = this.$route.query.generation;
          this.$api
              .get("https://pokeapi.co/api/v2/pokedex/"+genId+"/")
              .then(response => {
                console.log("2");
                console.log(response.data);
                // this.pokemons = response.data.pokemon_species;
              })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

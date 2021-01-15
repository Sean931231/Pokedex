<template>
  <div class="pokedex">
    <h2>{{ regionName }} pokedex</h2>

    <h5> Pokemon Entries: </h5>
    <b-row>
      <b-col
        md="4"
        lg="4"
        sm="12"
        class="poke-card"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        >
        <b-card-group deck>
          <b-card
            bg-variant="secondary"
            text-variant="white"
            img-src=""
            img-alt="pokemon-image"
            img-top>
            <b-card-title >
              <span>{{  }}</span>
            </b-card-title>
            <b-card-text>
              Weight:  {{ }}
            </b-card-text>
            <b-card-text>
              Height: {{ }}
            </b-card-text>
            <b-card-text>

            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Pokedex',
    data() {
      return {
        pokedexId   : this.$route.params.id,
        regionName  : "",
        pokemons    : []
      }
    },
    mounted () {
      this.getPokedex();
    },
    methods: {
      getPokedex() {
        this.$api
            .get(`https://pokeapi.co/api/v2/pokedex/${this.pokedexId}`)
            .then(res => {
              if (res.status == 200) {
                let result = res.data
                this.regionName = result.name;
                this.pokemons = result.pokemon_entries;
                console.log(this.pokemons);


              } else {
                console.log("Api seems incorrect");
                return false;
              }
            })
      }
    },
  }
</script>

<style lang="scss">
  @import "../styles/pokedex.scss";
</style>

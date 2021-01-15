<template>
  <div class="pokemon">
    <p>
      {{ this.$route.name}}
    </p>

    <div class="grid-poke">
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
              :img-src="pokemon.img"
              img-alt="pokemon-image"
              img-top>
              <b-card-title >
                #{{ pokemon.id }} <span>{{ pokemon.name }}</span>
              </b-card-title>
              <b-card-text>
                Weight:  {{ pokemon.weight }}
              </b-card-text>
              <b-card-text>
                Height: {{ pokemon.height }}
              </b-card-text>
              <b-card-text>
                  <span
                    class="poke-type"
                    v-for="type in pokemon.types"
                    :key="type.key"
                    :class="type.type.name">
                    {{ type.type.name }}
                  </span>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
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
        pokemonImage: '',
      }
    },

    mounted () {
      this.getPokemon();
    },

    methods: {
      getPokemon() {
        console.log(this.$route.params.id);
        if (this.$route.params.id != null) {
          console.log("stuck here");
        } else {
          this.$api
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response => {
              let pokemonResult = [];
              pokemonResult = response.data.results;
              // this.pokemons = response.data.results;
              pokemonResult.forEach((element, index) => {
                this.getPokemonInfo(element, index);
              })
            })
        }
      },

      // https://pokeapi.co/api/v2/pokemon/
      getPokemonInfo(element, index) {
        this.$api
            .get(element.url)
            .then(results => {
              let data = results.data;
              if (data.sprites.front_default == null) {
                this.pokemonImage = data.sprites.front_default;
                } else {
                this.pokemonImage = data.sprites.other['official-artwork'].front_default;
              }
              this.pokemons.push({
                id: data.id,
                name: data.name,
                img: this.pokemonImage,
                types: data.types,
                weight: data.weight,
                height: data.height
              })
              this.pokemons.sort((a,b) => a.id - b.id);
            })
      }
    },


  }
</script>

<style lang="scss">
  @import "../styles/pokemon.scss";
  @import "../styles/typeColor.scss";
</style>

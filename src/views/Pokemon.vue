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
              <b-card-title>
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
              return this.pokemons.sort((a,b) => a.id - b.id);
            })
      }
    },


  }
</script>

<style lang="scss">
  @import "../styles/pokemon.scss";

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
  .electric {
    background-color: #f8c030;
  }
  .dragon {
    background-color: #7860e0;
  }
  .normal {
    background-color: #a8a090;
  }
  .rock {
    background-color: #b8a058;
  }
  .ice {
    background-color: #58c8e0;
  }
  .fairy {
    background-color: #f1a7f9;
  }
  .bug {
    background-color: #a8b820;
  }
  .ground {
    background-color: #d0b058;
  }
  .fighting {
    background-color: #a05038;
  }
  .ghost {
    background-color: #6060b0;
  }
  .steel {
    background-color: #a8a8c0;
  }
  .dark {
    background-color: #705848;
  }

</style>

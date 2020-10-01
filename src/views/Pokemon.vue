<template>
  <div>
    <p> pokemon Page</p>
    <img :src="pokeimg" />
  </div>
</template>

<script>
  export default {
    name: 'Pokemon',
    components: {

    },
    data() {
      return {
        pokemon: 'charmander',
        pokeimg: ''
      }
    },

    mounted () {
      this.getPokemon();
    },

    methods: {
      getPokemon() {
        this.$api
          .get("https://pokeapi.co/api/v2/pokemon/"+this.pokemon)
          .then(response => {
            // console.log(response.data);
            console.log(response.data.sprites.other);
            this.pokeimg = response.data.sprites.other.dream_world.front_default;
          })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>

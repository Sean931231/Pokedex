<template>
  <div class="town">
    <b-container class="town-container">
      <h1> {{ this.TownUpperCase }} </h1>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Town',
    components: {

    },
    data() {
      return {
        pageid: 0,
        TownUpperCase: ''
      }
    },
    mounted () {
      this.getGenInfo();
    },
    methods: {
      getGenInfo() {
        let regionIndex = this.$route.query.id;
        this.$api
            .request('https://pokeapi.co/api/v2/region/'+regionIndex+'/')
            .then(response => {
              console.log (response.data);
              this.getTownNameUpperCase(response.data.name);
              return false;
            })
      },

      getTownNameUpperCase(townName) {
        let town = townName;
        this.TownUpperCase = town.charAt(0).toUpperCase() + town.slice(1)
      }
    },
  }
</script>

<style lang="scss">
@import "../styles/town.scss"
</style>

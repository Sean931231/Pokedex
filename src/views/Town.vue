<template>
  <div class="town">
    <!-- title -->
    <b-row class="region-name mt-3 mb-3">
        <b-col>
          <div>
            <h1> {{ this.TownUpperCase }} </h1>
          </div>
        </b-col>
    </b-row>
    <!-- first content -->
    <b-row class="first-part">

    </b-row>
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
        TownUpperCase: '',
        townName: '',
        gen: '',
        versions: [],
        url: '',
      }
    },
    mounted () {
      this.getGenInfo();
    },
    methods: {
      getGenInfo() {
        let regionIndex = this.$route.query.id;
        this.$api
            .request(`https://pokeapi.co/api/v2/region/${regionIndex}/`)
            .then(response => {
              this.getTownNameUpperCase(response.data.name);
              this.townName = response.data.name;
              this.gen = response.data.main_generation;
              this.versions = response.data.version_groups;
              // console.log (response.data);

              let urlSplit = response.data.version_groups;
              urlSplit.forEach(element => {
                this.url = element.url.split('/');
                console.log(this.url[6]);
              });
            })
      },

      getTownNameUpperCase(townName) {
        let town = townName;
        this.TownUpperCase = (town.charAt(0).toUpperCase() + town.slice(1)) + ' Region';
      }
    },
  }
</script>

<style lang="scss">
@import "../styles/town.scss"
</style>

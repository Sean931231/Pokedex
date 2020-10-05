<template>
  <div id="town">
    <b-container fluid>
      <b-col>
        <b-row>
          <p> {{ this.TownUpperCase }} </p>
        </b-row>
      </b-col>
    </b-container>
     <b-img :src='"../assets/regionmap/"+ this.$route.query.region +".jpg"' fluid alt="Responsive image"></b-img>
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
      this.getPageName();
      this.getTownName();
    },
    methods: {
      getPageName() {
        console.log("this is town page");
        this.pageid = this.$route.query.id;
        // console.log(this.pageid);
      },

      getTownName() {
        let town = this.$route.query.region;
        this.TownUpperCase = town.charAt(0).toUpperCase() + town.slice(1)
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "../styles/town.scss"
</style>

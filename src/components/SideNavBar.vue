<template>
  <div id="nav">
    <b-navbar toggleable variant="faded" type="light">
      <b-navbar-brand tag="h1" href="#/about">Pokedex</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
      </b-collapse>

      <!-- <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item router-link to="/">Home</b-nav-item>
            <b-nav-item router-link to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
// #nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//         color: #bb3636;
//         }
//     }
// }
</style>

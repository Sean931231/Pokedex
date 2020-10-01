<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" fixed="top" class="mb-3">
      <!-- navbar brand -->
      <b-navbar-brand class="lg">
        <img src="../assets/svg/pokeball-2.svg" class="d-inline-block align-top logo">
        Pokedex
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <!-- navbar icon -->
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="toggle-on" class="iconColor"></b-icon>
          <b-icon v-else icon="toggle-off" class="iconColor"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- navbar content -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="'/'">Home</b-nav-item>
          <b-nav-item :to="'/pokemon'">Pokemon</b-nav-item>
          <b-nav-item :to="'/about'">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  @import "../styles/sideNavBar.scss";
</style>

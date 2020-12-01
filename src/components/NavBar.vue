<template>
  <div id="nav-bar">
    <!-- pc -->
    <transition name="fade">
      <div class="pc-nav">
        <b-navbar toggleable shadow>
          <b-navbar-toggle target="my-sidebar">
            <template #default="{ expanded }">
              <b-img v-if="expanded" src="../assets/svg/openpokeball.png" class="logo-open"></b-img>
              <b-img v-else src="../assets/svg/closepokeball.png" class="logo-close"></b-img>
              <!-- <span class="title-part"> {{ title }} </span> -->
            </template>
          </b-navbar-toggle>

          <b-sidebar id="my-sidebar" :title='title' text-variant="dark" shadow>
            <div class="px-3 py-2">
              <b-navbar-nav>
                <b-nav-item :to="'/'">Home</b-nav-item>
                <b-nav-item :to="'/region'">Region</b-nav-item>
                <b-nav-item :to="'/generation'">Generation</b-nav-item>
                <b-nav-item :to="'/pokemon'">Pokemon</b-nav-item>
                <b-nav-item :to="'/about'">About</b-nav-item>
              </b-navbar-nav>
            </div>
          </b-sidebar>
        </b-navbar>
      </div>
    </transition>
    <!-- mobile -->
    <div class="mobile-nav">
      <b-navbar toggleable="lg" type="dark" fixed="top">
        <!-- navbar brand -->
        <b-navbar-brand>
          <img  src="../assets/svg/pokeball-2.svg" class="d-inline-block align-top logo">
          {{ title }}
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
          <!-- navbar icon -->
          <template v-slot:default="{ expanded }">
            <b-img v-if="expanded" src="../assets/svg/openpokeball.png" class="logo-open"></b-img>
            <b-img v-else src="../assets/svg/closepokeball.png" class="logo-close"></b-img>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- navbar content -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="'/'">Home</b-nav-item>
            <b-nav-item :to="'/region'">Region</b-nav-item>
            <b-nav-item :to="'/generation'">Generation</b-nav-item>
            <b-nav-item :to="'/pokemon'">Pokemon</b-nav-item>
            <b-nav-item :to="'/about'">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      title: {
        type: String,
      },
    },
  }
</script>

<style lang="scss">
  @import "../styles/navbar.scss";
</style>

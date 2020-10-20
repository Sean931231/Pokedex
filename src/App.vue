<template>
  <div id="app">
    <Navbar title="PoKedex"/>
    <b-container fluid class="content">
        <router-view />
      <!-- <transition-page>
      </transition-page> -->
    </b-container>
  </div>
</template>
<script>
// import Navbar from '@/components/SideNavBar.vue'
import Navbar from '@/components/NavBar.vue'
import TransitionPage from './components/TransitionPage.vue';
export default {
  components: {
    Navbar,
    TransitionPage
  },
}
</script>
<style lang="scss">
  @import "/styles/base.scss";
</style>

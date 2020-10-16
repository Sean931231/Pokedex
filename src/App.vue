<template>
  <div id="app">
    <b-container fluid class="content">
    <!-- <Navbar title="PoKedex"/> -->
        <router-view />
      <!-- <transition-page>
      </transition-page> -->
    </b-container>
  </div>
</template>
<script>
import Navbar from '@/components/SideNavBar.vue'
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

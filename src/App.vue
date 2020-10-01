<template>
  <div id="app">
    <Navbar />
    <b-container fluid class="content">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import Navbar from '@/components/SideNavBar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
  @import "/styles/base.scss";
</style>

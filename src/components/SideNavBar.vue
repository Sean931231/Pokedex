<template>
    <div id="nav">
        <b-navbar variant="faded" type="light">
            <b-navbar-brand tag="h1" href="#/about">Pokedex</b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            </b-collapse>
        </b-navbar>

      <b-button variant="primary" router-link to="/">
        Home
      </b-button>
       |
      <b-button variant="primary" router-link to="/about">
        About
      </b-button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: #bb3636;
        }
    }
}
</style>
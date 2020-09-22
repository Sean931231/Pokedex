<template>
  <div id="app">
    <div id="nav">
      <b-button variant="outline-primary" router-link to="/">
        Home
      </b-button>
       |
      <b-button variant="outline-primary" router-link to="/about">
        About
      </b-button>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

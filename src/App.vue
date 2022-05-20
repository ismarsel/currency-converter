<template>
  <nav>
    <router-link to="/">Конвертер</router-link>
    <router-link to="/currencylist">Список валют</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #5f89b4;
}
nav {
  padding: 30px 0;
  background-color: #577ca1;

  a {
    padding: 0 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #15e386;
    }
  }
}
input {
  margin: 30px;
}
</style>

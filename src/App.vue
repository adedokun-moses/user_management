<template>
  <router-view />
</template>

<style>
body {
  font-family: "Inter";
  font-style: normal;
font-weight: 500;
}
* {
  margin: 0px;
  padding: 0px;
}
/* nav {
  padding: 15px;

  background: red;

} */

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>


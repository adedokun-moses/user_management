<template>
  <div class="nav">
    <h5><router-link to="/home">Logo</router-link></h5>
    <router-link to="/home">User Management</router-link>
  </div>
</template>


<style scoped>
.nav {
  /*   width: 100%; */
  background: white;
  padding: 20px;
}

.nav h5 {
  display: inline-block;
  margin: 0px 10px;
}
.nav h5 a {
  display: inline-block;
  margin: 0px 10px;
  border-bottom: none;
    padding-bottom: 0px;
}
.nav h5 a:hover {
  border-bottom: none;
}

.nav a {
  text-decoration: none;
  color: black;
  margin-left: 70px;
  padding-bottom: 20px;
  border-bottom: 2px solid green;
}
.nav a:hover {
  border-bottom: 2px solid green;
}
</style>
<template>
  <div class="hello">
    <img :src="require('../assets/logo.svg')" />
    <div class="header-main">
      <h3>Faculty Rating App</h3>
    </div>
    <div class="menu">
      <button class="main-menu-btn">
        <router-link to="/create/professor">Unos novog profesora</router-link>
      </button>
      <button class="main-menu-btn">
        <router-link to="/professor/all">Profesori</router-link>
      </button>
      <button class="main-menu-btn">
        <router-link to="/review/professor"> Ocjeni profesora</router-link>
      </button>
      <button class="main-menu-btn">
        <router-link to="/review/student">Ocjeni studenta</router-link>
      </button>
      <button class="main-menu-btn">
        <router-link to="/review/faculty">Ocjeni fakultet</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-menu-btn {
  padding: 5px;
  margin: 5px;
}

img {
  height: 110px;
  width: 160px;
}
</style>

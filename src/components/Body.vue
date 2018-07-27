<template>
  <div id="body">
    <div id="nav-toggle-div">
        <button id="nav-toggle" @click="showNav()">{{ msg2 }}</button>
    </div>
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Body',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            msg2: 'Navigation'
        };
    },
    methods: {
        showNav() {
            console.log('send');
            this.$parent.$emit('toggleNav');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#body {
    position: relative;
    margin-left: 300px;
    min-height: 100%;
}
h1,
h2 {
    font-weight: normal;
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
@media only all and (max-width: 59.938em) {
    #body {
        margin-left: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    #body {
        margin-left: 0;
        width: 100%;
    }
    .sidebar-hidden {
        overflow: hidden;
    }
    .sidebar-hidden #body {
        margin-left: 230px;
        overflow: hidden;
    }
}
</style>

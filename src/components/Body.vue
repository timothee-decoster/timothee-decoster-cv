<template>
  <div id="body" v-bind:class="{ 'visible': hide, 'hidden': !hide }">
    <img src="../assets/vue-logo.png">
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
            hide: false
        };
    },
    mounted() {
        this.$parent.$on('toggleNav', () => {
            this.hide = !this.hide;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden,
.visible {
    position: inherit;
    margin-left: 300px;
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
hr {
    height: 2px;
    color: #333;
    background-color: #333;
    border: none;
}
@media only all and (max-width: 59.938em) {
    .hidden,
    visible {
        margin-left: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    .hidden {
        margin-left: 0;
        width: 100%;
    }
    .visible {
        position: inherit;
        margin-left: 230px;
        width: 100%;
    }
}
</style>

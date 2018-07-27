<template>
  <div id="app">
    <Nav/>
    <Body/>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Body from './components/Body';

export default {
    name: 'App',
    components: {
        Nav,
        Body
    }
};
</script>

<style>
body {
    background-color: beige;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

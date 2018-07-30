<template>
  <div id="app">
    <Nav/>
    <NavToggle/>
    <Body/>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Body from './components/Body';
import NavToggle from './components/Nav-toggle';

export default {
    name: 'App',
    components: {
        Nav,
        Body,
        NavToggle
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
}
</style>

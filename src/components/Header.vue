<template>
  <div id='header'>
    <NavToggle/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import NavToggle from './Nav-toggle';

export default {
    name: 'Header',
    components: {
        NavToggle
    },
    data() {
        return {
            msg: 'Header'
        };
    }
};
</script>

<style scoped>
</style>

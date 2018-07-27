<template>
  <div id='nav'>
    <NavHeader/>
    <hr/>
    <h1>{{ msg }}</h1>
    <hr/>
    <NavFooter/>
  </div>
</template>

<script>
import NavHeader from './Nav-header';
import NavFooter from './Nav-footer';

export default {
    name: 'Nav',
    components: {
        NavHeader,
        NavFooter
    },
    data() {
        return {
            msg: 'Side naviguation'
        };
    }
};
</script>

<style scoped>
#nav {
    display: block;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 300px;
    bottom: 0;
    left: 0;
    font-weight: 400;
    font-size: 15px;
}
h1 {
    color: beige;
}
@media only all and (max-width: 59.938em) {
    #nav {
        width: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    #nav {
        width: 230px;
        left: -230px;
    }
}
</style>

<template>
  <div id='nav'>
    <NavHeader/>
    <hr/>
    <section id='nav-section'>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
    </section>
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
            msg: 'Side naviguation',
            hide: false
        };
    },
    mounted() {
        this.$parent.$on('toggleNav', () => {
            console.log('received');
            console.log(`${this.hide} -> ${!this.hide}`)
            this.hide = !this.hide;
        });
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
#nav-section {
    position: relative;
    overflow: auto;
    max-height: 65vh;
}
hr {
    height: 2px;
    color: #42b983;
    background-color: #42b983;
    border: none;
    width: 300px;
}
h1 {
    color: beige;
}
@media only all and (max-width: 59.938em) {
    #nav {
        width: 230px;
    }
    hr {
        width: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    #nav {
        width: 230px;
        left: -230px;
    }
}

/*scrollbar*/
/* width */
::-webkit-scrollbar {
    width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #333;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: #42b983;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #297251;
}
</style>

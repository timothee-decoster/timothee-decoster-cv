<template>
  <div id='nav' v-bind:class="{ 'visible': hide, 'hidden': !hide }">
    <NavHeader/>
    <hr/>
    <ul id='nav-section'>
        <li v-for="(page, index) in pages" :key="index" @click="select(index)" 
        v-bind:class="{'selected': index==pageIndex}">{{ page.page }}</li>
    </ul>
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
            pages: [{ page: 'One' }, { page: 'Two' }],
            hide: false,
            pageIndex: 0
        };
    },
    methods: {
        select(index) {
            this.pageIndex = index;
            this.$parent.$emit(`page${index}`);
        }
    },
    mounted() {
        this.$parent.$on('toggleNav', () => {
            this.hide = !this.hide;
        });
    }
};
</script>

<style scoped>
.hidden,
.visible {
    overflow: auto;
    display: flex;
    flex-direction: column;
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
    max-height: 50vh;
    padding: 0;
    margin: 0;
}
hr {
    height: 2px;
    color: #42b983;
    background-color: #42b983;
    border: none;
    width: 300px;
}
li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 25px;
    background-color: #297251;
    color: beige;
    height: 50px;
    padding: 0px 0px 0px 20px;
    margin: 10px 0px 10px 0px;
}
li:hover {
    background-color: #289162;
}
.selected {
    background-color: #289162;
}
@media only all and (max-width: 59.938em) {
    .hidden {
        width: 230px;
    }
    hr {
        width: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    .hidden {
        width: 230px;
        left: -230px;
    }
    .visible {
        width: 230px;
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

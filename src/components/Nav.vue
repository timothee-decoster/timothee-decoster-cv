<template>
  <div id='nav' v-bind:class="{ 'visible': hide, 'hidden': !hide }">
    <NavHeader/>
    <hr/>
    <ul id='nav-section'>
        <router-link v-for="(page, index) in pages" :key="index" :to="`${page.page}`" tag="li">
            <svg viewBox="0 0 20 20" class="icon">
                <path d="M0 0 L10 10 L0 20"></path>
            </svg>
            {{ page.name }}
        </router-link>
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
            pages: [
                {
                    page: '/',
                    name: 'Accueil'
                },
                {
                    page: '/cursus',
                    name: 'Cursus'
                },
                {
                    page: '/experiences',
                    name: 'Experiences'
                },
                {
                    page: '/competences',
                    name: 'Competences'
                },
                {
                    page: '/loisirs',
                    name: 'Loisirs'
                }
            ],
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
    transition: 0.9s;
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
.icon {
    width: 1rem;
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(-100%);
}
.icon path {
    stroke: #333;
    stroke-width: 5px;
    fill: none;
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
    cursor: pointer;
}
li:hover {
    background-color: #289162;
}
li:hover .icon {
    opacity: 1;
    transform: translateX(0);
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

<template>
  <div id="body" v-bind:class="{ 'visible': hide, 'hidden': !hide }">
    <One v-if="this.page === 0"/>
    <Two v-if="this.page === 1"/>
  </div>
</template>

<script>
import One from './pages/One';
import Two from './pages/Two';

export default {
    name: 'Body',
    components: {
        One,
        Two
    },
    data() {
        return {
            hide: false,
            page: 0
        };
    },
    mounted() {
        this.$parent.$on('toggleNav', () => {
            this.hide = !this.hide;
        });
        this.$parent.$on('page0', () => {
            this.page = 0;
        });
        this.$parent.$on('page1', () => {
            this.page = 1;
        });
    }
};
</script>

<style scoped>
.hidden,
.visible {
    position: inherit;
    margin-left: 300px;
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

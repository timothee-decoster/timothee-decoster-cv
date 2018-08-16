<template>
  <div id="body" v-bind:class="{ 'visible': hide, 'hidden': !hide }">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Body',
    data() {
        return {
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
    position: inherit;
    margin-left: 300px;
    transition: 0.9s;
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

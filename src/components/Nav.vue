<template>
  <div id='nav' v-bind:class="{hide: hide}">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            msg: 'Side naviguation',
            hide: false
        };
    },
    mounted() {
        this.$parent.$on('toggleNav', () => {
            console.log('received');
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
.hide {
    display: none;
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
    .nav-hidden {
        overflow: hidden;
    }
    .sidebar-hidden #nav {
        left: 0;
    }
}
</style>

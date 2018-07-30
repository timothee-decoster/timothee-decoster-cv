<template>
  <div id='nav-toggle'>
    <button @click="showNav()">{{ msg }}</button>
  </div>
</template>

<script>
export default {
    name: 'Nav-toggle',
    data() {
        return {
            msg: 'Naviguation'
        };
    },
    methods: {
        showNav() {
            console.log('send');
            this.$parent.$emit('toggleNav');
        }
    }
};
</script>

<style scoped>
#nav-toggle {
    margin-left: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
@media only all and (max-width: 59.938em) {
    #nav-toggle {
        margin-left: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    #nav-toggle {
        margin-left: 0;
        width: 100%;
    }
}
</style>

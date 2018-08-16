<template>
    <div id='nav-toggle' v-bind:class="{ 'visible': hide, 'hidden': !hide }">
        <img src="@/assets/toggle.svg" alt="toggle naviguation" @click="showNav()">
    </div>
</template>

<script>
export default {
    name: 'Nav-toggle',
    data() {
        return {
            hide: false
        };
    },
    methods: {
        showNav() {
            this.hide = !this.hide;
            if (this.msg === '->') {
                this.msg = '<-';
            } else {
                this.msg = '->';
            }
            this.$parent.$emit('toggleNav');
        }
    }
};
</script>

<style scoped>
img {
    cursor: pointer;
}
.hidden {
    margin-left: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    visibility: hidden;
}
.visible {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
@media only all and (max-width: 59.938em) {
    .hidden,
    .visible {
        margin-left: 230px;
    }
}
@media only all and (max-width: 47.938em) {
    .hidden {
        visibility: visible;
        margin-left: 0;
        width: 100%;
    }
}
</style>

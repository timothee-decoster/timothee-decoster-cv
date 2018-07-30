<template>
    <!--<b-container fluid id='header'>
        <b-row>
            <b-col>
                <NavToggle/>
            </b-col>
            <b-col>
                <h1>{{ msg }}</h1>
            </b-col>
        </b-row>
    </b-container>-->
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
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

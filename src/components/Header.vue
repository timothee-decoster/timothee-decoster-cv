<template>
    <div id='header'>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
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
    justify-content: flex-end;
    align-items: center;
    max-height: 25px;
}
</style>

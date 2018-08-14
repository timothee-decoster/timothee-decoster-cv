<template>
  <div id="cursus">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Cursus',
    data() {
        return {
            msg: 'Cursus'
        };
    }
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
</style>

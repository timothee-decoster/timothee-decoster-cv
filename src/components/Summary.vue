<template>
  <div id="summary">
    <h1>{{ msg }}</h1>
    <img src="@/assets/vue-logo.png">
  </div>
</template>

<script>
export default {
    name: 'Summary',
    data() {
        return {
            msg: 'Welcome'
        };
    }
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
</style>

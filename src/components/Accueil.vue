<template>
  <div id="summary">
    <h1>{{ msg }}</h1>
    <img src="@/assets/vue-logo.png">
  </div>
</template>

<script>
export default {
    name: 'Accueil',
    data() {
        return {
            msg: 'Bienvenue'
        };
    }
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
</style>

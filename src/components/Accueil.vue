<template>
  <div id="summary">
    <h1>{{ msg }}</h1>
    <a href="https://github.com/timothee-decoster/timothee-decoster-cv/raw/master/src/assets/timothee_decoster_cv.pdf" download>Télécharger mon CV</a>
  </div>
</template>

<script>
export default {
    name: 'Accueil',
    data() {
        return {
            msg: 'Accueil'
        };
    }
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
</style>

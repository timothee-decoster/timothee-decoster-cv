<template>
  <div id="loisirs">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Loisirs',
    data() {
        return {
            msg: 'Loisirs'
        };
    }
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
</style>

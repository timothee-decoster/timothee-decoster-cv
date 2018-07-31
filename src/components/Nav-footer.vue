<template>
  <div id='nav-footer'>
    <p>
      <font color="beige">{{ msg }}</font>
      <a href="https://vuejs.org/" target="_blank"><img src="../assets/logo.png" width="4%"></a>
      <font color="beige">.</font>
    </p>
  </div>
</template>

<script>
export default {
    name: 'Nav-footer',
    data() {
        return {
            msg: 'Construit avec '
        };
    }
};
</script>

<style scoped>
</style>

<template>
  <div id='nav-footer'>
    <a href="https://www.facebook.com/timothee.decoster.7" target="_blank"><img class="link" src="../assets/facebook.png" width="25px"></a>
    <a href="https://github.com/timothee-decoster" target="_blank"><img class="link" src="../assets/github.png" width="25px"></a>
    <a href="mailto:decostertimoth@gmail.com"><img class="link" src="../assets/gmail.png" width="25px"></a>
    <p>
      <font color="beige">{{ msg }}</font>
      <a href="https://vuejs.org/" target="_blank"><img src="../assets/vue-logo.png" width="4%"></a>
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
.link {
    padding: 5px 6px 0px;
}
</style>

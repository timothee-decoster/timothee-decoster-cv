<template>
  <div id='nav-header'>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Nav-header",
  data() {
    return {
      msg: "Side naviguation header"
    };
  }
};
</script>

<style scoped>
h1 {
    color: beige;
}
</style>

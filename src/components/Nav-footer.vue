<template>
  <div id='nav-footer'>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Nav-footer",
  data() {
    return {
      msg: "Side naviguation footer"
    };
  }
};
</script>

<style scoped>
h1 {
    color: beige;
}
</style>

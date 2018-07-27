<template>
  <div id='header'>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Header"
    };
  }
};
</script>

<style scoped>
#header {
  min-height: 30px;
  max-height: 30px;
  -webkit-box-orient: horizontal;
  flex-direction: row;
}
</style>

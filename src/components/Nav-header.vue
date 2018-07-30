<template>
  <div id='nav-header'>
    <img src="../assets/profile.jpg" id="profile">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Nav-header',
    data() {
        return {
            msg: 'Timothée Decoster'
        };
    }
};
</script>

<style scoped>
#profile {
    width: 50%;
    border-radius: 50%;
}
h1 {
    color: beige;
}
</style>

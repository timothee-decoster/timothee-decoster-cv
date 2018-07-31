<template>
  <div id='nav-header'>
    <img src="../assets/profile.jpg" id="profile">
    <font color="beige" size="5">{{ msg }}</font>
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
#nav-header {
    display: flex;
    flex-grow: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
}
#profile {
    width: 50%;
    border-radius: 50%;
}
</style>

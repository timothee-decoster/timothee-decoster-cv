<template>
  <div id='nav-footer'>
    <img class="link" src="../assets/facebook.png" width="25px">
    <img class="link" src="../assets/github.png" width="25px">
    <img class="link" src="../assets/gmail.png" width="25px" @click="showModal = true">
    <MailModal v-if="showModal" @close="showModal = false"/>
    <p>
      <font color="beige">{{ msg }}</font>
      <a href="https://vuejs.org/" target="_blank"><img src="../assets/vue-logo.png" width="4%"></a>
      <font color="beige">.</font>
    </p>
  </div>
</template>

<script>
import MailModal from './Mail-modal';

export default {
    name: 'Nav-footer',
    components: {
        MailModal
    },
    data() {
        return {
            msg: 'Construit avec ',
            showModal: false
        };
    }
};
</script>

<style scoped>
.link {
    padding: 5px 6px 0px;
}
</style>

<template>
  <div class="dashboard">
    <button @click="saveData" class="dashboard__save-btn">Saves</button>
    <button @click="statReset" class="dashboard__save-btn dashboard__save-btn_reset">Reset</button>
    <SavePopup />
  </div>
</template>

<script>
import SavePopup from '../popup/SavePopup.vue';

export default {
  name: 'Dashboard',
  components: {
    SavePopup
  },
  methods: {
    saveData () {
      this.$store.commit('togglePopup');
    },
    // downloadData () {
    //   const data = JSON.parse(localStorage.getItem('statData'));
    //   const equip = JSON.parse(localStorage.getItem('equipData'));
    //   this.$store.commit('downloadData', { data, equip });
    // },
    statReset () {
      this.$store.commit('statReset');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/dashboard.scss";
</style>
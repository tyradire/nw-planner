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
      // const statData = {
      //   pts: this.$store.state.availablePts,
      //   str: this.$store.state.strength,
      //   dex: this.$store.state.dexterity,
      //   int: this.$store.state.intelligence,
      //   foc: this.$store.state.focus,
      //   con: this.$store.state.constitution
      // }          
      // const data = JSON.stringify(statData);
      // localStorage.setItem('statData', data);
    },
    downloadData () {
      const data = JSON.parse(localStorage.getItem('statData'));
      const equip = JSON.parse(localStorage.getItem('equipData'));
      console.log(123);
      this.$store.commit('downloadData', { data, equip });
    },
    statReset () {
      this.$store.commit('statReset');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/dashboard.scss";
</style>
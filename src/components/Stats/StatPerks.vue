<template>
  <div v-bind:class="[perksClosed ? 'stat-perks' : 'stat-perks stat-perks_opened']">
    <ul v-bind:class="[this.$store.state.strength < 50 ? 'stat-perks__array' : 'stat-perks__array stat-perks__array_opened']">
      <p class="stat-perks__title">Strength</p>
      <li v-for="(perks, i) in strengthPerks[this.$store.getters.strengthIndex]" 
      :key="i">{{ perks }}</li>
    </ul>
    <ul v-bind:class="[this.$store.state.dexterity < 50 ? 'stat-perks__array' : 'stat-perks__array stat-perks__array_opened']">
      <p class="stat-perks__title">Dexterity</p>
      <li v-for="(perks, i) in dexterityPerks[this.$store.getters.dexterityIndex]" 
      :key="i" >{{ perks }}</li>
    </ul>
    <ul v-bind:class="[this.$store.state.intelligence < 50 ? 'stat-perks__array' : 'stat-perks__array stat-perks__array_opened']">
      <p class="stat-perks__title">Intelligence</p>
      <li v-for="(perks, i) in intelligencePerks[this.$store.getters.intelligenceIndex]" 
      :key="i" >{{ perks }}</li>
    </ul>
    <ul v-bind:class="[this.$store.state.focus < 50 ? 'stat-perks__array' : 'stat-perks__array stat-perks__array_opened']">
      <p class="stat-perks__title">Focus</p>
      <li v-for="(perks, i) in focusPerks[this.$store.getters.focusIndex]" 
      :key="i" >{{ perks }}</li>
    </ul>
    <ul v-bind:class="[this.$store.state.constitution < 50 ? 'stat-perks__array' : 'stat-perks__array stat-perks__array_opened']">
      <p class="stat-perks__title">Constitution</p>
      <li v-for="(perks, i) in constitutionPerks[this.$store.getters.constitutionIndex]" 
      :key="i" >{{ perks }}</li>
    </ul>
  </div>
</template>

<script>
import { strengthPerks, dexterityPerks, intelligencePerks, focusPerks, constitutionPerks } from '../../data/stat-perks';

export default {
  data() {
    return {
      strengthPerks,
      dexterityPerks,
      intelligencePerks,
      focusPerks,
      constitutionPerks
    };
  },
  methods: {
  },
  props: [
    'perksClosed'
  ]
}
</script>

<style lang="scss" scoped>
@import "../../scss/stats.scss";
</style>
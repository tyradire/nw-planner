<template>
  <div id="app">
    <Equip />
    <div class="app-container">
      <div class="app-container__attributes">
        <Info />
        <Stats />
      </div>
      <StatPerks :perksClosed="perksClosed" />
      <button 
        @click="togglePerksOpen" 
        v-bind:class="[this.$store.getters.perksButtonActive ? 'app-container__perks-btn app-container__perks-btn_active' : 'app-container__perks-btn']">
        Attribute bonuses
      </button>
    </div>
    <Dashboard />
  </div>
</template>

<script>
import Info from './components/Info.vue';
import Stats from './components/Stats/Stats.vue';
import Dashboard from './components/Dashboard.vue';
import Equip from './components/Equip/Equip.vue';
import StatPerks from './components/Stats/StatPerks.vue';

export default {
  data() {
    return {
      perksClosed: true 
    }
  },
  name: 'App',
  components: {
    Info,
    Stats,
    Dashboard,
    Equip,
    StatPerks
  },
  methods: {
    togglePerksOpen () {
      this.perksClosed = !this.perksClosed
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
</style>

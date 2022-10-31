<template>
  <div class="stats">
    <SingleStat :type="'strength'"/>
    <SingleStat :type="'dexterity'"/>
    <SingleStat :type="'intelligence'"/>
    <SingleStat :type="'focus'"/>
    <SingleStat :type="'constitution'"/>
  </div>
</template>

<script>
import SingleStat from './SingleStat.vue';

export default {
  components: {
    SingleStat
  },
  methods: {
    increment () {
      this.count += 1;
    },
    decrement () {
      this.count -= 1;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/stats.scss";
</style>
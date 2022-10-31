<template>
  <div class="info">
    <p class="info__pts">{{ this.$store.state.availablePts }}</p>
    <p class="info__available">points <br> available</p>
    <div class="info__params">
      <p class="info__param">Health: <span class="info__param_hp">{{ this.$store.state.health }}</span></p>
      <p class="info__param">Mana: <span class="info__param_mp">{{ mana.toLocaleString('ru-RU') }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      health: this.$store.state.health,
      mana: 100
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/info.scss";
</style>
<template>
  <div class="equip-shard">
    <div class="equip-shard__item">
      <input 
      type="range"
      min="0"
      max="10"
      step="1"
      v-model="shardValue"
      class="equip-shard__input"
      @change="changeTest"
      />
      <span class="equip-shard__value">{{this.$store.state.shardValue}}</span>
      <img src="../../assets/inventory/umbral.png" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      shardValue: this.$store.state.shardValue
    }
  },
  props: [
  ],
  methods: {
    openShardPopup() {
      this.shardSettingOpened = !this.shardSettingOpened
    },
    changeTest() {
      this.$store.commit("setShardValue", this.shardValue);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/equip.scss";
</style>
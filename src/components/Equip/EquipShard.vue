<template>
  <div class="equip-shard">
    <div @click="openShardPopup" class="equip__item">
      <img src="../../assets/inventory/umbral.png" alt="Umbral shard" />
    </div>
    <div v-bind:class="[shardSettingOpened ? 'equip-shard__setting' : 'equip-shard__setting equip-shard__setting_opened']">
      <input 
      type="range"
      min="0"
      max="10"
      step="1"
      />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      shardSettingOpened: true,
    }
  },
  props: [
  ],
  methods: {
    openShardPopup() {
      this.shardSettingOpened = !this.shardSettingOpened
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/equip.scss";
</style>
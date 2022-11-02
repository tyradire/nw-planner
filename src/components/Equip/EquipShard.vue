<template>
  <div class="equip-shard">
    <div @click="openShardPopup" class="equip-shard__item">
      <input 
      type="range"
      min="0"
      max="10"
      step="1"
      v-model="shardValue"
      class="equip-shard__input"
      />
      <span class="equip-shard__value">{{shardValue}}</span>
      <img src="../../assets/inventory/umbral.png" />
    </div>
    <!-- <div v-bind:class="[shardSettingOpened ? 'equip-shard__setting' : 'equip-shard__setting equip-shard__setting_opened']">
      <input 
      type="range"
      min="0"
      max="10"
      step="1"
      v-model="shardValue"
      />
      <p>{{shardValue}}</p>
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      shardSettingOpened: true,
      shardValue: 0
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
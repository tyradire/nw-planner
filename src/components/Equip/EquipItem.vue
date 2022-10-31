<template>
  <div @click="openEquipList" class="equip__armor-item" >
    <img :src="this.item.icon" :alt="this.item.title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  name: 'EquipItem',
  props: [
    'item',
    'type'
  ],
  methods: {
    openEquipList() {
      this.$store.commit('openEquipPopup', { type: this.type });
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/equip.scss";
</style>
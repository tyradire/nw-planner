<template>
  <div @click="selectEquippedItem" class="equip-popup__item">
    <img :src="this.item.icon" class="equip-popup__image" />
    <p class="equip-popup__name">{{ this.item.title }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: [
    'item',
    'type'
  ],
  methods: {
    selectEquippedItem () {
      this.$store.commit("equipItem", { data: this.item, type: this.type });
      this.$store.commit("closeEquipPopup");
    }
  },
  
}
</script>

<style lang="scss" scoped>
@import "../scss/equip-popup.scss";
</style>
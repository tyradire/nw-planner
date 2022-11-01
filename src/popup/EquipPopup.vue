<template>
  <div v-bind:class="[this.$store.state.equipPopupClosed.closed ? 'equip-popup' : 'equip-popup equip-popup_opened']">
    <div v-for="(equipItem, i) in armor[this.$store.getters.equipPopupClosedType]?.slice(0, visibleItems ? 5 : 25)" :key="i">
      <SelectItem :item="equipItem" :type="$store.getters.equipPopupClosedType" />
    </div>
    <button @click="closeEquipPopup" class="equip-popup__close-btn">x</button>
    <button @click="toggleVisibleItems" class="equip-popup__open-btn">{{visibleItems ? 'all items' : 'hide items'}}</button>
  </div>
</template>

<script>
import SelectItem from './SelectItem.vue';
import { armor } from '../data/armor';

export default {
  
  data() {
    return {
      armor,
      visibleItems: true
    };
  },
  methods: {
    closeEquipPopup () {
      this.$store.commit("closeEquipPopup", {type: this.type});
      this.visibleItems = true;
    },
    toggleVisibleItems () {
      this.visibleItems = !this.visibleItems;
    }
  },
  components: {
    SelectItem
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/equip-popup.scss";
</style>
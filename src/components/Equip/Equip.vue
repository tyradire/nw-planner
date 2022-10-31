<template>
  <div class="equip">
    <div class="equip__armor">
      <EquipItem :item="this.$store.state.headEquiped" :type="'head'" />
      <EquipItem :item="this.$store.state.chestEquiped" :type="'chest'" />
      <EquipItem :item="this.$store.state.handEquiped" :type="'hand'" />
      <EquipItem :item="this.$store.state.legsEquiped" :type="'legs'" />
      <EquipItem :item="this.$store.state.feetEquiped" :type="'feet'" />
    </div>
    <EquipPopup />
  </div>
</template>

<script>
import EquipItem from './EquipItem.vue';
import EquipPopup from '../../popup/EquipPopup.vue';

export default {
  data() {
    return {
    }
  },
  name: 'Equip',
  components: {
    EquipItem,
    EquipPopup
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/equip.scss";
</style>
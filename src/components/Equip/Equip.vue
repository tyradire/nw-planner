<template>
  <div class="equip">
    <div class="equip__main">
      <div class="equip__group">
        <EquipItem :item="this.$store.state.headEquiped" :type="'head'" />
        <EquipItem :item="this.$store.state.chestEquiped" :type="'chest'" />
        <EquipItem :item="this.$store.state.handEquiped" :type="'hand'" />
        <EquipItem :item="this.$store.state.legsEquiped" :type="'legs'" />
        <EquipItem :item="this.$store.state.feetEquiped" :type="'feet'" />
      </div>
      <div class="equip__group">
        <EquipItem :item="this.$store.state.amulEquiped" :type="'amul'" />
        <EquipItem :item="this.$store.state.ringEquiped" :type="'ring'" />
        <EquipItem :item="this.$store.state.earEquiped" :type="'ear'" />
      </div>
      <div class="equip__group">
        <EquipItem :item="this.$store.state.weaponEquiped" :type="'weapon'" />
        <EquipItem :item="this.$store.state.secondaryEquiped" :type="'secondary'" />
      </div>
    </div>
    <div class="equip__amplifications">
      <EquipShard />
      <EquipItem :item="this.$store.state.foodEquiped" :type="'food'" />
    </div>
    <EquipPopup />
  </div>
</template>

<script>
import EquipItem from './EquipItem.vue';
import EquipShard from './EquipShard.vue';
import EquipPopup from '../../popup/EquipPopup.vue';

export default {
  data() {
    return {
    }
  },
  name: 'Equip',
  components: {
    EquipItem,
    EquipShard,
    EquipPopup
  },
  methods: {
    openShardPopup() {
      console.log('open')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../scss/equip.scss";
</style>
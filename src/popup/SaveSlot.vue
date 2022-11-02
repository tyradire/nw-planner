<template>
  <div class="save-popup__slot-container">
    <div @click="downloadSlot(slotLetter)" v-bind:class="[slotStyle]">
      <div v-bind:class="[triangleStyle]"></div>
      <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="none" d="M0 0h24v24H0z"/>
          <path fill="#414141" d="M4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 5v4h10V5H5z"/>
        </g>
      </svg>
      <p v-bind:class="[nameStyle]">
        {{ slotText }}
      </p>
    </div>
    <button @click="saveToSlot(slotLetter)" class="save-popup__download-btn">Save</button>
    <button @click="clearSlot(slotLetter)" class="save-popup__clear-btn">Clear</button>
  </div>
</template>

<script>

  export default {

    props: [
      'slotLetter'
    ],
    mounted() {
      this.slotStyle = localStorage.getItem('slot' + this.slotLetter)!== null ? 'save-popup__slot save-popup__slot_full' : 'save-popup__slot';
      this.triangleStyle = localStorage.getItem('slot' + this.slotLetter)!== null ? 'save-popup__triangle save-popup__triangle_full' : 'save-popup__triangle';
      this.nameStyle = localStorage.getItem('slot' + this.slotLetter)!== null ? 'save-popup__name save-popup__name_full' : 'save-popup__name';
      this.slotText = localStorage.getItem('slot' + this.slotLetter)!== null ? `DOWNLOAD` : `SLOT "${this.slotLetter}" IS EMPTY`;
    },
    data() {
      return {
        slotStyle: 'save-popup__slot',
        triangleStyle: 'save-popup__triangle',
        nameStyle: 'save-popup__name',
        slotText: `SLOT "${this.slotLetter}" IS EMPTY`,
      }
    },
    methods: {
      savePopupBtn () {
        this.$store.commit('togglePopup');
      },
      saveToSlot (slotLetter) {
        const statData = {
          pts: this.$store.state.availablePts,
          shd: this.$store.state.shardValue,
          str: this.$store.state.strength,
          dex: this.$store.state.dexterity,
          int: this.$store.state.intelligence,
          foc: this.$store.state.focus,
          con: this.$store.state.constitution
        }
        const equipData = {
          head: this.$store.state.headEquiped.id,
          chest: this.$store.state.chestEquiped.id,
          hand: this.$store.state.handEquiped.id,
          legs: this.$store.state.legsEquiped.id,
          feet: this.$store.state.feetEquiped.id,
          amul: this.$store.state.amulEquiped.id,
          ring: this.$store.state.ringEquiped.id,
          ear: this.$store.state.earEquiped.id,
          weapon: this.$store.state.weaponEquiped.id,
          secondary: this.$store.state.secondaryEquiped.id,
          food: this.$store.state.foodEquiped.id
        }
        const data = JSON.stringify(statData);
        const equip = JSON.stringify(equipData);
        localStorage.setItem('slot' + slotLetter, data);
        localStorage.setItem('equip slot' + slotLetter, equip);
        
        setTimeout(() => {
          this.slotStyle = 'save-popup__slot save-popup__slot_full', 
          this.triangleStyle = 'save-popup__triangle save-popup__triangle_full',
          this.nameStyle = 'save-popup__name save-popup__name_full',
          this.slotText = `DOWNLOAD`
        }, 1000);
        this.slotStyle = 'save-popup__slot save-popup__slot_saved'
        this.triangleStyle = 'save-popup__triangle save-popup__triangle_saving'
        this.nameStyle = 'save-popup__name save-popup__name_saving'
        this.slotText = `SAVING...`
      },
      downloadSlot (slotLetter) {
        const data = JSON.parse(localStorage.getItem('slot' + slotLetter));
        const equip = JSON.parse(localStorage.getItem('equip slot' + slotLetter));
        this.$store.commit('downloadData', { data, equip });
      },
      clearSlot (slotLetter) {
        localStorage.removeItem('slot' + slotLetter);
        localStorage.removeItem('equip slot' + slotLetter);
        setTimeout(() => {
          this.slotStyle = 'save-popup__slot', 
          this.triangleStyle = 'save-popup__triangle',
          this.nameStyle = 'save-popup__name',
          this.slotText = `SLOT "${this.slotLetter}" IS EMPTY`
        }, 1000);
        this.slotStyle = 'save-popup__slot save-popup__slot_clear', 
        this.triangleStyle = 'save-popup__triangle save-popup__triangle_clear',
        this.nameStyle = 'save-popup__name save-popup__name_clear',
        this.slotText = `CLEARING...`
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../scss/save-popup.scss";
</style>

<!-- v-bind:class="[this.active ? 'save-popup__slot' : 'save-popup__slot save-popup__slot_saved']" -->
<template>
  <div v-bind:class="[this.$store.state.savePopupClosed ? 'save-popup' : 'save-popup save-popup_opened']">
    <SaveSlot :slotLetter="'A'" />
    <SaveSlot :slotLetter="'B'" />
    <SaveSlot :slotLetter="'C'" />
    <button @click="savePopupBtn" class="save-popup__close-btn">x</button>
    <p class="save-popup__prompt">Data saved</p>
  </div>
</template>

<script>
import SaveSlot from "./SaveSlot.vue";

export default {
    data() {
        return {
            popupClosed: this.$store.state.savePopupClosed,
            activate: true,
        };
    },
    methods: {
        savePopupBtn() {
            this.$store.commit("togglePopup");
        },
        // saveToSlot(slot) {
        //     const statData = {
        //         pts: this.$store.state.availablePts,
        //         str: this.$store.state.strength,
        //         dex: this.$store.state.dexterity,
        //         int: this.$store.state.intelligence,
        //         foc: this.$store.state.focus,
        //         con: this.$store.state.constitution
        //     };
        //     const data = JSON.stringify(statData);
        //     localStorage.setItem("slot" + slot, data);
        //     this.activate = false;
        //     setTimeout(() => this.activate = true, 1000);
        // }
    },
    components: { SaveSlot }
}
</script>

<style lang="scss" scoped>
@import "../scss/save-popup.scss";
</style>
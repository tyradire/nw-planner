<template>
  <div class="single-stat">
    <div class="single-stat__controls">
      <button :style="{visibility: this.$store.state[this.type] > 14 ? 'visible' : 'hidden'}" @click="decrementTen" class="single-stat__button single-stat__button_ten">
        <svg width="20px" height="20px" viewBox="0 0 20 20" fill="#414141" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z"/>
        </svg>
      </button>
      <button @click="decrement" class="single-stat__button">
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="#414141" xmlns="http://www.w3.org/2000/svg">
          <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"/>
        </svg>
      </button>
      <p class="single-stat__value">{{ this.$store.state[this.type] }}</p>
      <button @click="increment" class="single-stat__button">
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="#414141" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/>
        </svg>
      </button>
      <button :style="{visibility: this.$store.state.availablePts > 9 ? 'visible' : 'hidden'}" @click="incrementTen" class="single-stat__button single-stat__button_ten">
        <svg width="20px" height="20px" viewBox="0 0 20 12" fill="#414141" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z"/>
        </svg>
      </button>
    </div>
    <div class="single-stat__progress">
      <p class="single-stat__type">{{type}}</p>
      <div class="single-stat__progress-line">
        <div 
          class="single-stat__line-active"
          :style="{ width: this.$store.state[this.type]*2 + 'px' }"
        ></div>
        <div class="single-stat__line-dots">
          <span v-bind:class="[this.$store.state[this.type]>49 ? 'single-stat__line-dot single-stat__line-dot_active' : 'single-stat__line-dot']"></span>
          <span v-bind:class="[this.$store.state[this.type]>99 ? 'single-stat__line-dot single-stat__line-dot_active' : 'single-stat__line-dot']"></span>
          <span v-bind:class="[this.$store.state[this.type]>149 ? 'single-stat__line-dot single-stat__line-dot_active' : 'single-stat__line-dot']"></span>
          <span v-bind:class="[this.$store.state[this.type]>199 ? 'single-stat__line-dot single-stat__line-dot_active' : 'single-stat__line-dot']"></span>
          <span v-bind:class="[this.$store.state[this.type]>249 ? 'single-stat__line-dot single-stat__line-dot_active' : 'single-stat__line-dot']"></span>
          <span v-bind:class="[this.$store.state[this.type]>299 ? 'single-stat__line-dot single-stat__line-dot_active' : 'single-stat__line-dot']"></span>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  
  props: [
    'type',
    'statValue'
  ],
  data() {
    return {
      freePts: this.$store.state.availablePts
    }
  },
  methods: {
  increment () {
    if (this.$store.state.availablePts + this.$store.state.shardValue > 0) {
      // this.$store.state[this.type] += 1;
      this.$store.commit('increment', { type: this.type })
      // if (this.type == 'constitution') {
      //   this.$store.commit('calculateHealth');
      // } else return;
    } else return;
  },
  incrementTen () {
    if (this.$store.state.availablePts + this.$store.state.shardValue > 9) {
      // this.$store.state[this.type] += 10;
      this.$store.commit('incrementTen', { type: this.type })
      if (this.type == 'constitution') {
        this.$store.commit('calculateHealth');
      } else return;
    } else return;
  },
  decrement () {
    console.log(this.type)
    if (this.$store.state[this.type] - this.$store.state.statsEquiped[this.type] > 5) {
      // this.$store.state[this.type] -= 1;
      this.$store.commit('decrement', { type: this.type })
      if (this.type == 'constitution') {
        this.$store.commit('calculateHealth');
      } else return;
    } else return;  
  },
  decrementTen () {
    if (this.$store.state[this.type] - this.$store.state.statsEquiped[this.type] > 14) {
      // this.$store.state[this.type] -= 10;
      this.$store.commit('decrementTen', { type: this.type })
      if (this.type == 'constitution') {
        this.$store.commit('calculateHealth');
      } else return;
    } else return;
  },
  // calculateHealth () {
  //   switch (Math.ceil(this.$store.state.constitution / 100)) {
  //     case 1: this.$store.state.health = 5999 + ((this.$store.state.constitution - 5) * 25);
  //     break;
  //     case 2: this.$store.state.health = 5999 + 2375 + ((this.$store.state.constitution - 100) * 24);
  //     break;
  //     case 3: this.$store.state.health = 5999 + 2375 + 2400 + ((this.$store.state.constitution - 200) * 23);
  //     break;
  //     case 4: this.$store.state.health = 5999 + 2375 + 2400 + 2300 + ((this.$store.state.constitution - 300) * 22);
  //     break;
  //     case 5: this.$store.state.health = 5999 + 2375 + 2400 + 2300 + 2200 + ((this.$store.state.constitution - 400) * 21);
  //   }
  // }
}
}

</script>

<style lang="scss" scoped>
@import "../../scss/stats.scss";
</style>

// 
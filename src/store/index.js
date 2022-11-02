import Vue from 'vue';
import Vuex from 'vuex';
import { armor } from '../data/armor';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
    availablePts: 190,
    shardValue: 0,
    strength: 5,
    dexterity: 5,
    intelligence: 5,
    focus: 5,
    constitution: 5,
    savePopupClosed: true,
    equipPopupClosed: {closed: true, type: 'default'},
    health: 5999,
    statsEquiped: {
      strength: 0, dexterity: 0, intelligence: 0, focus: 0, constitution: 0
    },
    headEquiped: {
      title: 'Head',
      icon: require('../assets/inventory/head.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'hddef'
    },
    chestEquiped: {
      title: 'Chest',
      icon: require('../assets/inventory/chest.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'chdef'
    },
    handEquiped: {
      title: 'Hand',
      icon: require('../assets/inventory/hand.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'hndef'
    },
    legsEquiped: {
      title: 'Legs',
      icon: require('../assets/inventory/legs.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'lgdef'
    },
    feetEquiped: {
      title: 'Feet',
      icon: require('../assets/inventory/feet.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'ftdef'
    },
    amulEquiped: {
      title: 'Amulet',
      icon: require('../assets/inventory/amul.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'amdef'
    },
    ringEquiped: {
      title: 'Ring',
      icon: require('../assets/inventory/ring.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'rndef'
    },
    earEquiped: {
      title: 'Ear',
      icon: require('../assets/inventory/earring.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'erdef'
    },
    weaponEquiped: {
      title: 'Weapon',
      icon: require('../assets/inventory/weapon.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'wpdef'
    },
    secondaryEquiped: {
      title: 'Secondary',
      icon: require('../assets/inventory/secondary.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'ofdef'
    },
    foodEquiped: {
      title: 'Food',
      icon: require('../assets/inventory/food/Cook.png'),
      stats: {str: 0, dex: 0, int: 0, foc: 0, con: 0},
      id: 'ckdef'
    },
  },
  getters: {
    equipPopupClosedType: function (state) {
      return state.equipPopupClosed.type;
    },
    strengthIndex: function (state) {
      if (state.strength > 300) { return 5 }
      else return Math.floor((state.strength/50) - 1)
    },
    dexterityIndex: function (state) {
      if (state.dexterity > 300) { return 5 }
      else return Math.floor((state.dexterity/50) - 1)
    },
    intelligenceIndex: function (state) {
      if (state.intelligence > 300) { return 5 }
      else return Math.floor((state.intelligence/50) - 1)
    },
    focusIndex: function (state) {
      if (state.focus > 300) { return 5 }
      else return Math.floor((state.focus/50) - 1)
    },
    constitutionIndex: function (state) {
      if (state.constitution > 300) { return 5 }
      else return Math.floor((state.constitution/50) - 1)
    },
    groupEquip: function (state) {
      const equipSet = {
        head: state.headEquiped.id,
        chest: state.chestEquiped.id,
        hand: state.handEquiped.id,
        legs: state.legsEquiped.id,
        feet: state.feetEquiped.id,
        amul: state.amulEquiped.id,
        ring: state.ringEquiped.id,
        ear: state.earEquiped.id,
        weapon: state.weaponEquiped.id,
        secondary: state.handEquiped.id
      }
      return equipSet;
    },
    perksButtonActive: function (state) {
      return state.strength > 49 || 
             state.dexterity > 49 || 
             state.intelligence > 49 ||
             state.focus > 49 ||
             state.constitution > 49
             
    }
  },
  mutations: {
    decrement(state, payload) {
      state.availablePts = state.availablePts + 1;
      state[payload.type] = state[payload.type] - 1;
      if (payload.type == 'constitution') {
        store.commit("calculateHealth");
      }
    },
    increment(state, payload) {
      state.availablePts = state.availablePts - 1;
      state[payload.type] = state[payload.type] + 1;
      if (payload.type == 'constitution') {
        store.commit("calculateHealth");
      }
    },
    decrementTen(state, payload) {
      state.availablePts = state.availablePts + 10;
      state[payload.type] = state[payload.type] - 10;
      if (payload.type == 'constitution') {
        store.commit("calculateHealth");
      }
    },
    incrementTen(state, payload) {
      state.availablePts = state.availablePts - 10;
      state[payload.type] = state[payload.type] + 10;
      if (payload.type == 'constitution') {
        store.commit("calculateHealth");
      }
    },
    setShardValue(state, payload) {
      console.log(payload)
      state.shardValue = payload;
    },
    calculateHealth(state) {
      switch (Math.ceil(state.constitution/100)) {
        case 1: state.health = 5999 + ((state.constitution - 5) * 25);
        break;
        case 2: state.health = 5999 + 2375 + ((state.constitution - 100) * 24);
        break;
        case 3: state.health = 5999 + 2375 + 2400 + ((state.constitution - 200) * 23);
        break;
        case 4: state.health = 5999 + 2375 + 2400 + 2300 + ((state.constitution - 300) * 22);
        break;
        case 5: state.health = 5999 + 2375 + 2400 + 2300 + 2200 + ((state.constitution - 400) * 21);
      }
    },
    downloadEquip(state, payload) {
      const headItem = armor.head.filter(item => item.id == payload.equipData.head)[0];
      const chestItem = armor.chest.filter(item => item.id == payload.equipData.chest)[0];
      const handItem = armor.hand.filter(item => item.id == payload.equipData.hand)[0];
      const legsItem = armor.legs.filter(item => item.id == payload.equipData.legs)[0];
      const feetItem = armor.feet.filter(item => item.id == payload.equipData.feet)[0];
      const amulItem = armor.amul.filter(item => item.id == payload.equipData.amul)[0];
      const ringItem = armor.ring.filter(item => item.id == payload.equipData.ring)[0];
      const earItem = armor.ear.filter(item => item.id == payload.equipData.ear)[0];
      const weaponItem = armor.weapon.filter(item => item.id == payload.equipData.weapon)[0];
      const secondaryItem = armor.secondary.filter(item => item.id == payload.equipData.secondary)[0];
      const foodItem = armor.food.filter(item => item.id == payload.equipData.food)[0];
      state.headEquiped = {
        title: headItem.title, 
        icon: headItem.icon, 
        stats: {
                str: headItem.stats.str, 
                dex: headItem.stats.dex, 
                foc: headItem.stats.foc,
                int: headItem.stats.int,
                con: headItem.stats.con
               },
        id: headItem.id
      },
      state.chestEquiped = {
        title: chestItem.title, 
        icon: chestItem.icon, 
        stats: {
                str: chestItem.stats.str, 
                dex: chestItem.stats.dex, 
                foc: chestItem.stats.foc,
                int: chestItem.stats.int,
                con: chestItem.stats.con
               },
        id: chestItem.id
      },
      state.handEquiped = {
        title: handItem.title, 
        icon: handItem.icon, 
        stats: {
                str: handItem.stats.str, 
                dex: handItem.stats.dex, 
                foc: handItem.stats.foc,
                int: handItem.stats.int,
                con: handItem.stats.con
               },
        id: handItem.id
      },
      state.legsEquiped = {
        title: legsItem.title, 
        icon: legsItem.icon, 
        stats: {
                str: legsItem.stats.str, 
                dex: legsItem.stats.dex, 
                foc: legsItem.stats.foc,
                int: legsItem.stats.int,
                con: legsItem.stats.con
               },
        id: legsItem.id
      },
      state.feetEquiped = {
        title: feetItem.title, 
        icon: feetItem.icon, 
        stats: {
                str: feetItem.stats.str, 
                dex: feetItem.stats.dex, 
                foc: feetItem.stats.foc,
                int: feetItem.stats.int,
                con: feetItem.stats.con
               },
        id: feetItem.id
      },
      state.amulEquiped = {
        title: amulItem.title, 
        icon: amulItem.icon, 
        stats: {
                str: amulItem.stats.str, 
                dex: amulItem.stats.dex, 
                foc: amulItem.stats.foc,
                int: amulItem.stats.int,
                con: amulItem.stats.con
               },
        id: amulItem.id
      },
      state.ringEquiped = {
        title: ringItem.title, 
        icon: ringItem.icon, 
        stats: {
                str: ringItem.stats.str, 
                dex: ringItem.stats.dex, 
                foc: ringItem.stats.foc,
                int: ringItem.stats.int,
                con: ringItem.stats.con
               },
        id: ringItem.id
      },
      state.earEquiped = {
        title: earItem.title, 
        icon: earItem.icon, 
        stats: {
                str: earItem.stats.str, 
                dex: earItem.stats.dex, 
                foc: earItem.stats.foc,
                int: earItem.stats.int,
                con: earItem.stats.con
               },
        id: earItem.id
      },
      state.weaponEquiped = {
        title: weaponItem.title, 
        icon: weaponItem.icon, 
        stats: {
                str: weaponItem.stats.str, 
                dex: weaponItem.stats.dex, 
                foc: weaponItem.stats.foc,
                int: weaponItem.stats.int,
                con: weaponItem.stats.con
               },
        id: weaponItem.id
      },
      state.secondaryEquiped = {
        title: secondaryItem.title, 
        icon: secondaryItem.icon, 
        stats: {
                str: secondaryItem.stats.str, 
                dex: secondaryItem.stats.dex, 
                foc: secondaryItem.stats.foc,
                int: secondaryItem.stats.int,
                con: secondaryItem.stats.con
               },
        id: secondaryItem.id
      },
      state.foodEquiped = {
        title: foodItem.title,
        icon: foodItem.icon,
        stats: {
          str: foodItem.stats.str, 
          dex: foodItem.stats.dex, 
          foc: foodItem.stats.foc,
          int: foodItem.stats.int,
          con: foodItem.stats.con
        },
        id: foodItem.id
      },
      store.commit("calculateHealth");
    },
    downloadData(state, payload) {
      state.availablePts = payload.data.pts;
      state.shardValue = payload.data.shd;
      state.strength = payload.data.str;
      state.dexterity = payload.data.dex;
      state.intelligence = payload.data.int;
      state.focus = payload.data.foc;
      state.constitution = payload.data.con;
      state.headEquiped.id = payload.equip.head;
      state.chestEquiped.id = payload.equip.chest;
      state.handEquiped.id = payload.equip.hand;
      state.legsEquiped.id = payload.equip.legs;
      state.feetEquiped.id = payload.equip.feet;
      state.amulEquiped.id = payload.equip.amul;
      state.ringEquiped.id = payload.equip.ring;
      state.earEquiped.id = payload.equip.ear;
      state.weaponEquiped.id = payload.equip.weapon;
      state.secondaryEquiped.id = payload.equip.secondary;
      state.foodEquiped.id = payload.equip.food;
      store.commit('downloadEquip', {equipData: payload.equip});
    },
    statReset(state) {
      state.availablePts = 190;
      state.shardValue = 0;
      state.strength = 5;
      state.dexterity = 5;
      state.intelligence = 5;
      state.focus = 5;
      state.constitution = 5;
      state.health = 5999;
      //clear stats and icons
      state.headEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.chestEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.handEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.legsEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.feetEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.amulEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.ringEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.earEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.weaponEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.secondaryEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.foodEquiped.stats = {str: 0, dex: 0, int: 0, foc: 0, con: 0};
      state.statsEquiped = {
        strength: 0, dexterity: 0, intelligence: 0, focus: 0, constitution: 0
      }
      state.headEquiped.icon = require('../assets/inventory/head.png');
      state.chestEquiped.icon = require('../assets/inventory/chest.png');
      state.handEquiped.icon = require('../assets/inventory/hand.png');
      state.legsEquiped.icon = require('../assets/inventory/legs.png');
      state.feetEquiped.icon = require('../assets/inventory/feet.png');
      state.amulEquiped.icon = require('../assets/inventory/amul.png');
      state.ringEquiped.icon = require('../assets/inventory/ring.png');
      state.earEquiped.icon = require('../assets/inventory/earring.png');
      state.weaponEquiped.icon = require('../assets/inventory/weapon.png');
      state.secondaryEquiped.icon = require('../assets/inventory/secondary.png');
      state.foodEquiped.icon = require('../assets/inventory/food/Cook.png');
    },
    togglePopup(state) {
      state.savePopupClosed = !state.savePopupClosed;
    },
    openEquipPopup(state, payload) {
      state.equipPopupClosed.closed = false;
      state.equipPopupClosed.type = payload.type;
    },
    closeEquipPopup(state) {
      state.equipPopupClosed.closed = true;
    },
    equipItem(state, payload) {
      //вычесть из текущих статов текущую надетую шмотку
      state.strength = state.strength - state[payload.type + 'Equiped'].stats.str;
      state.dexterity = state.dexterity - state[payload.type + 'Equiped'].stats.dex;
      state.intelligence = state.intelligence - state[payload.type + 'Equiped'].stats.int;
      state.focus = state.focus - state[payload.type + 'Equiped'].stats.foc;
      state.constitution = state.constitution - state[payload.type + 'Equiped'].stats.con;
      state.statsEquiped.strength = state.statsEquiped.strength - state[payload.type + 'Equiped'].stats.str; 
      state.statsEquiped.dexterity = state.statsEquiped.dexterity - state[payload.type + 'Equiped'].stats.dex;
      state.statsEquiped.intelligence = state.statsEquiped.intelligence - state[payload.type + 'Equiped'].stats.int;
      state.statsEquiped.focus = state.statsEquiped.focus - state[payload.type + 'Equiped'].stats.foc;
      state.statsEquiped.constitution = state.statsEquiped.constitution - state[payload.type + 'Equiped'].stats.con;
      //перезаписать надетую шмотку
      state[payload.type + 'Equiped'].title = payload.data.title,
      state[payload.type + 'Equiped'].icon = payload.data.icon,
      state[payload.type + 'Equiped'].stats = payload.data.stats,
      state[payload.type + 'Equiped'].id = payload.data.id
      //прибавить статы новой надетой шмотки
      state.strength = state.strength + state[payload.type + 'Equiped'].stats.str;
      state.dexterity = state.dexterity + state[payload.type + 'Equiped'].stats.dex;
      state.intelligence = state.intelligence + state[payload.type + 'Equiped'].stats.int;
      state.focus = state.focus + state[payload.type + 'Equiped'].stats.foc;
      state.constitution = state.constitution + state[payload.type + 'Equiped'].stats.con;
      state.statsEquiped.strength = state.statsEquiped.strength + state[payload.type + 'Equiped'].stats.str; 
      state.statsEquiped.dexterity = state.statsEquiped.dexterity + state[payload.type + 'Equiped'].stats.dex;
      state.statsEquiped.intelligence = state.statsEquiped.intelligence + state[payload.type + 'Equiped'].stats.int;
      state.statsEquiped.focus = state.statsEquiped.focus + state[payload.type + 'Equiped'].stats.foc;
      state.statsEquiped.constitution = state.statsEquiped.constitution + state[payload.type + 'Equiped'].stats.con;
      store.commit("calculateHealth");
    }
  },
  actions: {},
});
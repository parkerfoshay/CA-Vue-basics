let app = Vue.createApp({
  data() {
    return {
      title: "Cloud Academy",
      inlineCounter: 0,
      clickCounter: 0,
      keyCounter: 0,
      keyModCounter: 0,
      activeElem: null,
    };
  },

  methods: {
    incClickCounter() {
      this.clickCounter++;
    },

    incKeyCounter() {
      this.keyCounter++;
    },

    incKeyModCounter() {
      this.keyModCounter++;
    },

    clearCounters() {
     
    },
    
    setActive(event) {
      this.activeElem = parseInt(event.target.id);
    },
  },
}).mount("#app");

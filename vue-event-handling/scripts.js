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
      this.clickCounter = 0;
      this.keyCounter = 0;
      this.inlineCounter = 0;
      this.keyModCounter = 0;
    },
    
    setActive(event) {
      this.activeElem = parseInt(event.target.id);
    },
  },
}).mount("#app");

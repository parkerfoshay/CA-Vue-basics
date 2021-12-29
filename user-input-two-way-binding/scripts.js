let app = Vue.createApp({
  data() {
    return {
      title: "Hello World",
      styleId: "main-section",
      disabled: false,
      userInput: "Type your message here"
    };
  },

  methods: {
    darkMode() {
      if(!this.disabled) {
        this.styleId = "main-section-dark"
        this.disabled = true;
      } else {
        this.styleId = "main-section"
        this.disabled = false;
      }
    }
  }
}).mount("#app");

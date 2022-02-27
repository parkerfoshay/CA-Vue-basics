let app = Vue.createApp({
  data() {
    return { title: "Hello Vue" };
  },

  computed: {
    reverseWord() {
      return this.title.split(" ").reverse().join(" ")
    }
  },

  methods: {
    capitalize(text) {
      return text.toUpperCase()
    }
  }
}).mount("#app");

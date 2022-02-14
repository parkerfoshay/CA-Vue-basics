let app = Vue.createApp({
  data() {
    return {
      destinationId: null,
      loading: true,
      loadCards: false,
    };
  },

  mounted() {
    setTimeout(() => (this.loading = false), 2000);
  },
  methods: {
    selectDestination(event) {
      this.destinationId = event.target.id;
    },
  },
}).mount("#app");

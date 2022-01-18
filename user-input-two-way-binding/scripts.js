let app = Vue.createApp({
  data() {
    return {
      name: "",
      selected: "",
      textAreaInput: "",
    };
  },

  methods: {
    onSubmit() {
      let userInput = {
        name: this.name,
        pet: this.selected,
        bio: this.textAreaInput,
      };

      console.log(
        `The user entered the following: ${userInput.name} ${userInput.pet} ${userInput.bio}`
      );

      this.name = "";
      this.selected = "";
      this.textAreaInput = "";
    },
  },
}).mount("#app");

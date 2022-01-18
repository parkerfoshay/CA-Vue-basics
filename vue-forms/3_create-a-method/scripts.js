let app = Vue.createApp({
    data() {
      return {
        title: "Cloud Academny",
        name: "",
        selectedPet: "",
        bioInput: "",
      };
    },
  
    methods: {
      onSubmit() {
        let userInput = {
          name: this.name,
          pet: this.selectedPet,
          bio: this.bioInput,
        };
  
        console.log(
          `The user entered the following: ${userInput.name} ${userInput.pet} ${userInput.bio}`
        );
  
        this.name = "";
        this.selectedPet = "";
        this.bioInput = "";
      },
    },
  }).mount("#app");
  
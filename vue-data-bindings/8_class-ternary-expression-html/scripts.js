let app = Vue.createApp({
  data() {
    return {
      title: "Cloud Academy",
      warningText: "text-warning",
      backgroundColor: "bg-dark",
      activeElem: true,
      styles: {
        color: 'green',
        fontSize: '24px'
      },
      darkThemeToggle: false,
      
    };
  },

 
}).mount("#app");

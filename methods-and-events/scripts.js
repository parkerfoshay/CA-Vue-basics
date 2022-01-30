let app = Vue.createApp({
  data() {
    return {
      title: "Cloud Academy",
      darkThemeToggle: false,
      warningText: "text-warning",
      backgroundColor: "bg-dark",
      activeElem: true,
      styles: {
        color: 'green',
        fontSize: '24px'
      }
      
    };
  },

 
}).mount("#app");

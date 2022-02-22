import itemInput from "./components/ItemForm.js";
import itemList from "./components/ItemList.js";

let app = Vue.createApp({
  data() {
    return {
      itemsListArray: [],
    };
  },

  components: {
    itemInput,
    itemList,
  },

  methods: {
    addItems(itemText) {
      this.itemsListArray.push(itemText);
    },
  },
}).mount("#app");

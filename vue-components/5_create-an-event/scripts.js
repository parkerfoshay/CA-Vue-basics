const itemList = {
  props: {
    item: String,
  },

  methods: {
    onClick(event) {
      this.$emit("item-deleted", event.target.id);
    },
  },

  template: `
        <li class="list-group-item" @click="onClick($event)">{{ item }}</li>
      `,
};

const itemInput = {
  data() {
    return {
      item: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("item-added", this.item);

      this.item = "";
    },
  },
  template: `
    <form action="" @submit.prevent="onSubmit">
              <div class="form-group mt-2">
                <label for="name">Enter your item:</label>
                <input
                  type="text"
                  for="item"
                  id="item"
                  class="form-control"
                  v-model="item"
                  placeholder="Enter your item here"
                  required
                />
              </div>
            </form>
    `,
};

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

    deleteItem(itemIndex) {
      this.itemsListArray.splice(parseInt(itemIndex), 1);
    },
  },
}).mount("#app");

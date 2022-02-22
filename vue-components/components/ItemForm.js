export default {
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

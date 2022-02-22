let app = Vue.createApp({
  data() {
    return {
      users: [
        {
          id: "oiy123456",
          firstName: "John",
          lastName: "Jayi",
          email: "john.jayi@example.com",
          phone: "6023433445",
          age: 35,
          city: "San Francisco",
          state: "CA",
        },
        {
          id: "754321rdew",
          firstName: "Virginia",
          lastName: "Favre",
          email: "virginia.favre@example.com",
          phone: "0987346123",
          age: 29,
          city: "Springdale",
          state: "AR",
        },
        {
          id: "tyui12345",
          firstName: "J.J.",
          lastName: "Pizzia",
          email: "jj.pizzia@example.com",
          phone: "2376548909",
          age: 24,
          city: "New York City",
          state: "NY",
        },
        {
          id: "ertyh126548",
          firstName: "Julie",
          lastName: "Osaka",
          email: "julie.osaka@example.com",
          phone: "5267908763",
          age: 40,
          city: "Seattle",
          state: "WA",
        },
        {
          id: "fre1654890",
          firstName: "Hank",
          lastName: "Portland",
          email: "hank.portland@example.com",
          phone: "6023332445",
          age: 59,
          city: "Boon",
          state: "NC",
        },
      ],
    };
  },

  computed: {
    underThirty() {
      return this.users.filter((user) => user.age < 30);
    },
  },
  methods: {
      stateFilter(usersInput) {
          return usersInput.filter((user) => user.state === "NY")
      }
  }
}).mount("#app");

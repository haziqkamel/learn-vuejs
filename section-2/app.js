const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
      isPurple: false,
      selectedColor: "",
      size: 150,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(message, event) {
      console.log(message);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },

  },
  computed: {
    fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
    circle_classes() {
      return { purple: this.isPurple }
    }
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 1000);
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);

let vm2 = Vue.createApp({
  data() {
    return {
      mode: 1,
    }
  }
}).mount("#app2")

let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  // lifecycle
  beforeCreate() {
    console.log('Before create function called!: ', this.message)
  },
  created() {
    console.log('Created function called!: ', this.message)
  },
  beforeMount() {
    console.log('Before mounted function called!: ', this.$el)
  },
  mounted() {
    console.log('Mounted function called!: ', this.message)
  },
  beforeUpdate() {
    console.log('Before update function called!')
  },
  updated() {
    console.log('Updated function called!')
  },
  beforeUnmount() {
    console.log('Before unmount function called!')
  },
  unmounted() {
    console.log('Unmount function called!')
  }
});

vm.mount("#app");

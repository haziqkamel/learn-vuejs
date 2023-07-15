<template>
  <select v-model="currentPage">
    <option value="HomePage">Home</option>
    <option value="AboutPage">About</option>
  </select>

  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
</template>

<script>
import HomePage from "./components/Home.vue"
import AboutPage from "./components/About.vue"

export default {
  name: "App",
  components: {
    AboutPage,
    HomePage,
  },
  data() {
    return {
      currentPage: "HomePage"
    }
  },
  computed: {
    currentComponent() {
      return this.currentPage
    }
  }
}
</script>

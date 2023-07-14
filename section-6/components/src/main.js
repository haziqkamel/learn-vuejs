import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from '@/components/Greeting.vue'

let vm = createApp(App)

// Register Component globally, cons: hard for webpack and cost consuming
// vm.component("Greeting", Greeting)

vm.mount('#app')

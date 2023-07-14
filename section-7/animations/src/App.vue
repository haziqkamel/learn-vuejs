<template>

  <button type="button" @click="flag = !flag">Toggle Show</button>

  <!-- Animation -->
  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else key="secondary">Another hello</h2>
  </transition> -->

  <!-- type: animation / transition -->
  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">Chloe</h2>
    <h2 v-else>Cleo</h2>
  </transition> -->

  <!-- Animate with javascript -->
  <transition 
  @before-enter="beforeEnter" 
  @enter="enter" 
  @after-enter="afterEnter" 
  @before-leave="beforeLeave"
  @leave="leave" 
  @after-leave="afterLeave" :css="false">
    <h2 v-if="flag">Hey</h2>
  </transition>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    beforeEnter(e) {
      
    },
    enter(e, done) {
    const animation =  e.animate([{ transform: "scale3d(0,0,0)"}, {}], {duration: 1000});
    
    animation.onFinish = () => {
      done();
    };
    },
    afterEnter(e) {

    },
    beforeLeave(e) {

    }, 
    leave(e, done) {
      const animation =  e.animate([{}, {transform: "scale3d(0,0,0)"}], {duration: 1000});
    
    animation.onFinish = () => {
      done();
    };
    },
    afterLeave(e) {

    }
  }
}
</script>

<style>

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-enter-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to {
    transform: scale(1,1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1,1);
  }
  to {
    transform: scale(0,0);
  }
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}

</style>
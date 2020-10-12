<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'About',
  components: {
    HelloWorld
  },
  mounted () {
    this.demoLearn();
  },
  methods: {
    demoLearn() {
      const aa = {
        a: 1,
        b: 2,
      };
      const bb = {
        b: 100,
        c: 1,
        d: 2,
      };
      console.log({...aa,...bb});
      const a = [1,2,3,4];
      const b = [4,5,6];
      let c = [];
      console.log(a);
      console.log(b);
      c = [...a,...b];
      console.log(c);
    }
  },
}
</script>

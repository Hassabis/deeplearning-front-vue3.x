<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    return{

    }

  },

});
</script>
<style lang="less">
#test{
  width: 100px;
  height: 100px;
  position: absolute;
  letter-spacing: 0;
  background: deepskyblue;
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

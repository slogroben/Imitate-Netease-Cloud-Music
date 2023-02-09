<template>
  <router-view/>
  <foot-music></foot-music>
</template>

<script>
import FootMusic from './views/FootMusic.vue';
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
export default {
   components:{
    FootMusic,
    Vue3Marquee
   }
}
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>

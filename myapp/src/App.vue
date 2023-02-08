<template>
  <router-view/>
  <foot-music></foot-music>
</template>

<script>
import FootMusic from './views/FootMusic.vue';
export default {
   components:{
    FootMusic
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

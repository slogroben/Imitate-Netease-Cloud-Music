<template>
  <div>
    <TopNav></TopNav>
    <SwpierTop></SwpierTop>
    <IconList></IconList>
    <music-list></music-list>
  </div> 
</template>

<script>
import IconList from '../components/home/IconList.vue'
import MusicList from '../components/home/MusicList.vue'
import SwpierTop from '../components/home/SwpierTop.vue'
import TopNav from '../components/home/TopNav.vue'


export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwpierTop,
    IconList,
    MusicList
  }
}
</script>

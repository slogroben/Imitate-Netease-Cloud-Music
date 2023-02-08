<template>
  <div></div>
  <ItemMusicTop :playlist="playlist" />
  <item-music-list :playlist="playlist" :musiclist="musiclist"></item-music-list>
</template>

<script>
import { useRoute } from 'vue-router'
import api from '../api'
import ItemMusicTop from '../components/Item/ItemMusicTop.vue'
import ItemMusicList from '../components/Item/ItemMusicList.vue'

export default {
    name:'ItemMusic',
    data(){
      return{
        playlist:'',
        musiclist:''
      }
    },
    components: { ItemMusicTop,ItemMusicList },
    methods:{
      async getPlayList(){
        let id=useRoute().query.id
        let response=await api.getDayMusicListDetail(id)
        this.playlist=response.data.playlist
        console.log(this.playlist);
        sessionStorage.setItem('itemData',JSON.stringify(this.playlist))
        this.getMusicList()
      },
      async getMusicList(){
            console.log(this.playlist);
            let id=this.playlist.id
            let response=await api.getDayMusicListAllMusic(id,20,0)
            this.musiclist=response.data
            console.log(this.musiclist);
          }
    },
    mounted(){
      this.getPlayList()
    },
}
</script>

<style lang="less" scoped>

</style>
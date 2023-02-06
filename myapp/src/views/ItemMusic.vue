<template>
  <item-music-top :playlist="playlist"></item-music-top>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import api from '../api'
import ItemMusicTop from '../components/Item/ItemMusicTop.vue'
export default {
  components: { ItemMusicTop },
    name:'ItemMusic',
    setup(){
        let state=reactive({
            playlist:''
        })

        onMounted(async ()=>{
            let id=useRoute().query.id
            let response=await api.getDayMusicListDetail(id)
            state.playlist=response.data.playlist
            sessionStorage.setItem('itemData',JSON.stringify(state))
        })
        return state
    }
}
</script>

<style lang="less" scoped>

</style>
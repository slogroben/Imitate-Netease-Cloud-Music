<template>
    <div v-if="playList">
        <img class="bgimg" :src="playList[playListIndex].al.picUrl" />
        <MusicViewTop></MusicViewTop>
    </div>
    
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import MusicViewTop from '../components/musicView/MusicViewTop.vue'
export default {
    components:{
        MusicViewTop
    },
    computed:{
        ...mapState(['playList','playListIndex']),
        ...mapGetters(['playingMusic'])

    }
}
</script>

<style lang="less" scoped>
.bgimg{
    width: 100%;
    height: 100%;
    z-index: -1;
    position: fixed;
    filter: blur(30px);
}
</style>
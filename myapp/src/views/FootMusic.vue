<template>
  <div v-if="playList" class="footMusic" > 
    <div class="leftBox" @click="modifyShowMusicView(true)">
        <div class="imgBox">
            <van-image
            round
            width="1rem"
            height="1rem"
            :src="playList[playListIndex].al.picUrl"
            />
        </div>
        <div class="msgBox">
            <div class="musicName">
                {{playList[playListIndex].name}}
                <div class="ar">
                    <span v-for="ar in playList[playListIndex].ar" :key="ar">{{ar.name}}&nbsp;&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
    <div class="rightBox">
        <audio  ref="audioPlay" :src="'https://music.163.com/song/media/outer/url?id='+playList[playListIndex].id+'.mp3 '"></audio>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyishoushangyige"></use>
        </svg>
        <svg @click="getMusic" v-if="this.playFlag" class="icon" aria-hidden="true">
            <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg @click="getMusic" v-if="!this.playFlag" class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayigexiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-playlistMusic"></use>
        </svg>
    </div>
    <van-popup
    v-model:show="showMusicView"
    position="bottom"
    :style="{ height: '100%',width:'100%' }"
    >
        <music-view @getMusic="getMusic" @getMusicState="getMusicState"></music-view>
    </van-popup>
  </div>
</template>

<script>
import api from '@/api'
import { mapActions, mapMutations, mapState } from 'vuex'
import MusicView from './MusicView.vue'
export default {
    data(){
        return{
            currentTime:0
        }
    },
    components:{
        MusicView
    },
    computed:{
        ...mapState(['playList','playListIndex','playFlag','playingMusic','showMusicView']),
    },
    watch:{
        'playListIndex':{
            handler(){
                let audioPlay=this.$refs.audioPlay
                this.modifyPlayFlag(true)
                audioPlay.src=this.playList[this.playListIndex].id
                audioPlay.play().catch(error=>{
                    audioPlay.play()
                })
            },
            deep:true,
        },
        'playList':{
            handler(){
                let audioPlay=this.$refs.audioPlay
                this.modifyPlayFlag(true)
                audioPlay.src=this.playList[this.playListIndex].id
                audioPlay.play().catch(error=>{
                    audioPlay.play()
                })
            },
            deep:true,
        }
    },
    methods:{
        ...mapActions(['getMusicLyric']),
        ...mapMutations(['rePlayFlag','modifyPlayFlag','modifyShowMusicView','modifyCurrentTime','modifyDuration']),
        async getMusic(){
            let id=this.playList[this.playListIndex].id
            let audioPlay=this.$refs.audioPlay
            let response=await api.getMusic(id)
            this.modifyDuration(audioPlay.duration)
            if(response.data.code==200){
                if(!this.playFlag){
                    this.rePlayFlag()
                    audioPlay.play()
                    this.upadteCurrentTime()
                }else{
                    this.rePlayFlag()
                    audioPlay.pause()
                }
            }
        },
        upadteCurrentTime(){
            let audioPlay=this.$refs.audioPlay
            if(this.playFlag){
                setInterval(()=>{
                    this.modifyCurrentTime(audioPlay.currentTime)
                },1)
            }
        },
        getMusicState(){
            let audioPlay=this.$refs.audioPlay
            this.modifyDuration(audioPlay.duration)
            if(this.playFlag){
                this.upadteCurrentTime()
            }
        }
    },
    updated(){
        this.getMusicLyric(this.playList[this.playListIndex].id)
        this.getMusicState()
    }
}
</script>

<style lang="less" scoped>
    .footMusic{
        width: 100%;
        height: 1.4rem;
        background-color: #fff;
        position: fixed;
        z-index: 99999;
        bottom: 0;
        border-top: 1px solid #999;
        display: flex;
        justify-content: space-between;
        padding: 0 .2rem;
        .leftBox{
            width: 50%;
            display: flex;
            justify-content: left;
            .imgBox{
                padding: .2rem 0;
            }
            .msgBox{
                overflow:hidden;
                .musicName{
                    white-space: nowrap;
                    margin: 15px;
                    font-size: .36rem;
                    font-weight:550;
                    .ar{
                        font-size: .24rem;
                        font-weight:450;
                    }
                }
            }
        }
        .rightBox{
            width: 50%;
            display: flex;
            justify-content: right;
            padding: .4rem 0;
            .icon{
                margin-left: .4rem;
                width: 0.6rem;
                height: 0.6rem;
            }
            
        }
    }
</style>
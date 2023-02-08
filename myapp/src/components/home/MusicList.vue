<template>
  <div class="findMusic">
    <div class="top">
        <span class="topTitle">发现好歌单</span>
        <span class="topRight">
            <van-button size="mini" plain>查看更多</van-button>
        </span>
    </div>
    <div class="listBox">
        <van-swipe :loop="false" :width="widthMatch" :show-indicators="false">
            <van-swipe-item  class="musicCard"  v-for="m in musicList"  :key="m.id">
                <router-link :to="{path:'/itemMusic',query:{id:m.id}}">
                    <div class="ImgBox">
                        <span class="playBox">
                            <svg class="icon play" aria-hidden="true">
                                <use xlink:href="#icon-gl-play-001"></use>
                            </svg>
                            <span class="playCount">{{m.playCount}}</span>
                        </span>
                        <van-image
                        class="musicImg"
                        :src="m.picUrl"
                        />
                    </div>
                    <p class="musicName">{{m.name}}</p>
                </router-link>
            </van-swipe-item>  
        </van-swipe>
    </div>
  </div>
</template>

<script>
import api from '@/api';
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    name:'MusicList',
    methods:{
        
    },
    setup(){
        const state=reactive({
            musicList:[],
            widthMatch:120
        })
        async function getGendan(){
            let response=await api.getDayMusicList(10)
            state.musicList=response.data.result
            state.musicList.forEach((m)=>{
                if(m.playCount>=10000){
                    m.playCount=parseInt(m.playCount/1000)*1000
                    m.playCount=m.playCount/10000+'万'
                }
                if(m.playCount>=100000000){
                    m.playCount=parseInt(m.playCount/10000000)*10000000
                    m.playCount=m.playCount/100000000+'亿'
                }
            })
        }
        function widthMatch(){
            let deviceWidth=document.documentElement.clientWidth||window.innerWidth
            state.widthMatch=deviceWidth*0.35
        }
        onMounted(async()=>{
            getGendan()
            widthMatch()
        })

        return state
    }
}

</script>

<style lang="less" scoped>
.a{
    width: 2.4rem;
}
.findMusic{
    margin: .2rem 0;
    .top{
        display: flex;
        justify-content: space-between;
        padding: 0 .2rem;
        .topTitle{
            font-size: .36rem;
            font-weight: 900;
        }
        .topRight{

        }   
    } 
    .listBox{
        width: 100%;
        height: 3.6rem;
        overflow: hidden;
        .musicCard{
        width: 2.4rem;
        height: 3.6rem;
        padding: .2rem .2rem;
        margin: 0;
        display: inline-block;
        overflow: hidden;
        .ImgBox{
            .playBox{
                position: absolute;
                right:.4rem;
                z-index: 999;
                .play{
                    width: .3rem;
                    height: .3rem;
                    line-height: 0;
                    fill: #FFFF;
                }
                .playCount{
                    text-align: center;
                    font-size: .3rem;
                    color: #FFFF;
                }
            }
            .musicImg{
                width: 100%;
                height: 2rem;
            }
        }
        .musicName{
            width: 100%;
            margin: .2rem 0 0 0;
            font-size:.26rem;
        }
    } 
    }     
}
</style>
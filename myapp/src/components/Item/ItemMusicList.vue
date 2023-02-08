<template>
  <div v-if="musiclist&&playlist" class="musicList">
    <div class="musicListTop">
        <div class="leftBox">
            <div>
                <svg @click="addAllPlayList(this.musiclist.songs)" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
            </div>
            <div class="playText">
                播放全部<span>共{{musiclist.songs.length}}首</span>
            </div>
        </div>
        <div class="rightBox">
            <div>
                <van-button type="danger"
                round 
                size="small"
                >
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiahao_o"></use>
                    </svg>
                    <span>收藏({{playlist.subscribedCount}})</span>
                </van-button>
            </div>
        </div>
    </div>
    <div class="musicListBox">
        <van-list
        
        >
        <div class="musicCard"  v-for="(music,index) in musiclist.songs" :key="music">
            <div class="leftBox" @click="addPlayList(music)">
                <div class="musicIndex">
                    <span>{{index+1}}</span>
                </div>
                <div class="musicMsg">
                    <span class="musicName">{{music.name}}</span>
                    <div class="musicArBox">
                        <span class="musicAr" v-for="ar in music.ar " :key="ar.name">{{ar.name}}&nbsp;&nbsp;&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="rightBox">
                <svg v-if="music.mv" class="icon playbtn" aria-hidden="true">
                    <use xlink:href="#icon-shipin"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-31liebiao"></use>
                </svg>
            </div>
        </div>
        </van-list>
    </div>
  </div>
</template>

<script>
import api from '@/api';
import { mapGetters, mapMutations } from 'vuex';

export default {
    props:['musiclist','playlist'],
    computed:{
        ...mapGetters(['playingMusic'])
    },
    methods:{
        ...mapMutations(['addPlayList','addAllPlayList']),
    },
    mounted(){
        
    }
}
</script>

<style lang="less" scoped>
.musicList{
    border-top: 1px solid #fff;
    border-radius: .4rem .4rem 0 0;
    background-color:#fff ;
    .musicListTop{
        display: flex;
        justify-content: space-between; 
        padding: .2rem .2rem;
        .leftBox{
            display: flex;
            justify-content: space-between;
            .playText{
                padding: 0 0 0 20px;
                font-size: .36rem;
                font-weight: 900;
                span{
                    margin: .2rem;
                    font-weight: 300;
                    font-size: .28rem;
                    color: rgb(88, 85, 85);
                }
            }
        }
        .rightBox{
            .icon{
                fill: #fff;
                width: .4rem;
                height: .3rem;
            }
        }
    }
    .musicListBox{
        width: 100%;
        height: 100%;
        background-color:#fff ;
        .musicCard{
            width: 100%;
            height: 60px;
            background-color:#fff ;
            display: flex;
            justify-content: space-between;
            .leftBox{
                display: inline-flex;
                width: 75%;
                padding: 10px;
                overflow: hidden;
                .musicIndex{
                    width: 20px;
                    height: 20px;
                    margin: .2rem .2rem;
                }
                .musicMsg{
                    display: inline-block;
                    width: 50%;
                    .musicName{
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: .36rem;
                        font-weight: 550;            
                    }
                    .musicArBox{
                            .musicAr{
                                font-size:.16rem;
                                font-weight: 450;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                color: #4b4848;
                            }
                        }
                }
            }
            .rightBox{
                width: 25%;
                display: flex;
                justify-content:right;
                padding: 10px;
                .icon{
                    margin: 0 0 0 .2rem;
                }
            }
        }
    }
}
</style>
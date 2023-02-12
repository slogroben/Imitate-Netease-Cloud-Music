<template>
  <div class="showSongs">
            <van-list>
                <div class="musicCard"  v-for="(music,index) in songs" :key="music">
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
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods:{
        ...mapMutations(['addPlayList'])
    },
    props:['songs']
}
</script>

<style lang="less" scoped>
    .showSongs{
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
</style>
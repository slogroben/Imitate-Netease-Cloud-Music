<template>
    <div class="box" v-if="playList">
        <img class="bgimg" :src="playList[playListIndex].al.picUrl" />
        <div class="musicViewTop">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="modifyShowMusicView(false)">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
                <Vue3Marquee class="musicName">
                    {{playingMusic.name}}
                </Vue3Marquee>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="musicViewCenter">
            <div class="discbox" @click="showLyric=true" v-if="!showLyric">
                <div class="discBox"  v-if="!playList[playListIndex].al.picUrl">
                    <img class="needle" src="@/assets/needle-ab.png"/>
                    <img class="disc" src="@/assets/disc_default.png"/>
                </div>
                <div class="discBox" v-if="playList[playListIndex].al.picUrl" >
                    <img ref="needle" class="needle" src="@/assets/needle-ab.png"/>
                    <img class="disc" src="@/assets/disc.png"/>
                    <img ref="img" class='musicImg' :src="playList[playListIndex].al.picUrl"/>
                </div>
            </div>
            <div class="lyricbox" @click="showLyric=false" v-if="showLyric&&lyricList">
                {{ lyricList.lrc.lyric }}
            </div>
        </div>
        <div class="musicViewFooter">
            <div class="footerTop">
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-aixin"></use>
                    </svg>
                </span>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiazai"></use>
                    </svg>
                </span>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yinlechangpian"></use>
                    </svg>
                </span>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaoxi"></use>
                    </svg>
                </span>
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-diandiandianshu"></use>
                    </svg>
                </span>
            </div>
            <div class="footerCenter">
                <van-progress :pivot-text="currentTime"/>
            </div>
            <div class="footerBotton">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shangyishoushangyige"></use>
                </svg>
                <svg @click="$emit('getMusic') " v-if="this.playFlag" class="icon centerIcon" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                </svg>
                <svg @click="$emit('getMusic')" v-if="!this.playFlag" class="icon centerIcon"  aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiayigexiayishou"></use>
                </svg>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import api from '@/api'
export default {
    data(){
        return{
            currentTime:0,
            showLyric:false
        }
    },
    components:{
        Vue3Marquee
    },
    watch:{
        'playFlag':{
            handler(){
                let needle=this.$refs.needle
                let img=this.$refs.img
                if(this.playFlag){
                    needle.className='needlePlay'
                    img.className='musicImg_active'

                }else{
                    needle.className='needle'
                    img.className='musicImg'
                }
            },
            deep:true
        }
    },
    computed:{
        ...mapState(['playList','playListIndex','playFlag','lyricList']),
        ...mapGetters(['playingMusic']),
        lyric(){
            let arr=[]
            if(this.lyricList){
                console.log(JSON.stringify(this.lyricList.lrc.lyric));
                arr=JSON.stringify(this.lyricList.lrc.lyric).split('\\n')
                return arr
            }

        }
    },
    methods:{
        ...mapMutations(['modifyShowMusicView']),

    },   
    components:{
        Vue3Marquee
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
.box{

    width: 100%;
    height: 100%;
    .musicViewTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    .itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: right;
        align-items: center;
        overflow: hidden;

    }
    .itemLeft{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        overflow: hidden;
        .musicName{
            width: 2rem;
            white-space: nowrap;
            
            font-size: .4rem;
            color: #fff;
        }
        .icon{
            width:.7rem;
            height: .7rem;
        }
    }
    .icon{
        fill:#fff
    }
    
    }
    .musicViewCenter{
        width: 100%;
        height: 9rem;
        display: flex;
        flex-direction: column;
        position: relative;
        .discbox{
            display: flex;
            justify-content: center;
            .discBox{
                margin: 2rem 0 0 0;
                width: 4rem;
                height: 4rem;
                position: relative;
                .needle{
                    position: absolute;
                    left: 2rem;
                    top: -1rem;
                    width: 1.6rem;
                    height: 3rem;
                    z-index: 999;
                    transform-origin: 0 0;
                    transform: rotate(-30deg);
                    transition: all 2s;
                }
                .needlePlay{
                    position: absolute;
                    left: 2rem;
                    top: -1rem;
                    width: 1.6rem;
                    height: 3rem;
                    z-index: 999;
                    transform-origin: 0 0;
                    transform: rotate(0deg);
                    transition: all 2s;
                }
                .disc{
                    width: 4rem;
                    height: 4rem;
                    border-radius: 2rem;
                }
                .musicImg{
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: .75rem;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 1.5rem;
                    animation: rotate_ar 10s linear infinite;
                    animation-play-state: paused;
                }
                .musicImg_active{
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: .75rem;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 1.5rem;
                    animation: rotate_ar 10s linear infinite;
                    animation-play-state: running;
                }
                @keyframes rotate_ar{
                    0%{
                        transform: rotateZ(0deg);
                    }
                    100%{
                        transform: rotateZ(360deg);
                    }
                }
            }
        }
    }
    .musicViewFooter{
        padding: 0 .2rem;
        .footerTop{
            display: flex;
            justify-content: space-around;
            .icon{
                fill: #fff;
            }
        }
        .footerCenter{
            padding: .4rem 0;
        }
        .footerBotton{
            display: flex;
            justify-content: space-between;
            padding: 0 1rem;
            align-items: center;
            .centerIcon{
                width: 1rem;
                height: 1rem;
            }
        }
    }
}

</style>
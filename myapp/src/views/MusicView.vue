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
            <div class="discbox" @click="showLyric=true" v-show="!showLyric">
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
            <div class="lyricbox" @click="showLyric=false" v-if="showLyric&&lyricList&&lyric">
                <p :class="currentTime<l.nextTime&&currentTime>l.time?'lyricActive':''"  v-for="l in lyric" :key="l">{{  l?l.lyricPart:'' }}</p>
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
                <span>{{ thisTime }}</span>
                <van-progress class="progress" :stroke-width="0.02+'rem'" :percentage="currentTime/duration*100" pivot-text="" :show-pivot='false' />
                <span>{{ lastTime}}</span>
            </div>
            <div class="footerBotton">
                <svg @click="$emit('preMusic')" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shangyishoushangyige"></use>
                </svg>
                <svg @click="$emit('getMusic') " v-if="this.playFlag" class="icon centerIcon" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                </svg>
                <svg @click="$emit('getMusic')" v-if="!this.playFlag" class="icon centerIcon"  aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg @click="$emit('nextMusic')" class="icon" aria-hidden="true">
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
                if(needle!=null&&img!=null){
                    if(this.playFlag){
                        needle.className='needlePlay'
                        img.className='musicImg_active'

                    }else{
                        needle.className='needle'
                        img.className='musicImg'
                    }
                }
            },
            deep:true
        },
        'showLyric':{
            handler(){
                this.$emit('getMusicState')
                if(this.showLyric){
                    let lyricbox=document.querySelector('.lyricbox')
                    let lyricActive=document.querySelector('p.lyricActive')
                    if(lyricActive&&lyricActive.offsetTop>200){
                        lyricbox.scrollTop=lyricActive.offsetTop-200
                    }
                }else{
                    let needle=this.$refs.needle
                    let img=this.$refs.img
                    if(needle!=null&&img!=null){
                        if(this.playFlag){
                            needle.className='needlePlay'
                            img.className='musicImg_active'

                        }else{
                            needle.className='needle'
                            img.className='musicImg'
                        }
                    }
                }
            }
        },
        'currentTime':{
            handler(){
                let lyricbox=document.querySelector('.lyricbox')
                let lyricActive=document.querySelector('p.lyricActive')
                if(lyricActive&&lyricActive.offsetTop>200){
                    lyricbox.scrollTop=lyricActive.offsetTop-200
                }
            }
        },
        'playListIndex':{
            handler(){
                this.$emit('getMusicState')
            }
        }
    },
    computed:{
        ...mapState(['playList','playListIndex','playFlag','lyricList','duration']),
        ...mapGetters(['playingMusic']),
        lyric(){
            let arr=[]
            if(this.lyricList.lrc.lyric){
                arr=JSON.stringify(this.lyricList.lrc.lyric).split('\\n').map((item,index)=>{
                    if(item.split('[')[1]){
                        let time=item.split('[')[1].split(']')[0]
                        let lyricPart=item.split('[')[1].split(']')[1]
                        let minute=time.split(':')[0]
                        let second=time.split(':')[1].split('.')[0]
                        let millisecond=time.split(':')[1].split('.')[1]
                        time= parseInt(minute)*60+parseFloat(time.split(':')[1])
                        return {
                            time,
                            lyricPart,
                            minute,
                            second,
                            millisecond
                        }
                    }
                    return false
                })
                arr.map((item,index,arr)=>{
                    if(item&&(arr.length-2)!=index){
                        item.nextTime=arr[index+1].time
                        return item
                    }
                })
                return arr
            }
            return arr
        },
        ...mapState(['currentTime']),
        thisTime(){
            if(!this.currentTime){return '0:00'}
            this.$emit('getMusicState')
            return (parseInt((this.currentTime+'').split('.')[0]/60))+':'+parseInt((this.currentTime+'').split('.')[0]%60/10)+(this.currentTime+'').split('.')[0]%60%10
        },
        lastTime(){
            if(!this.duration){return}
            this.$emit('getMusicState')
            return parseInt(parseInt(this.duration)/60)+':'+parseInt((this.duration+'').split('.')[0]%60/10)+(this.duration+'').split('.')[0]%60%10
        }
    },
    methods:{
        ...mapMutations(['modifyShowMusicView']),
    },   
    components:{
        Vue3Marquee
   },
   mounted(){
        this.$emit('getMusicState')
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
        .lyricbox{
            width: 100%;
            height: 9rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            white-space: normal;
            text-overflow: clip;
            overflow: scroll;
            line-height: .8rem;
            color: #b9b4b4;
            .lyricActive{
                font-weight: 900;
                font-size: .4rem;
                color: #fff;
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
            display: flex;
            justify-content: space-around;
            .progress{
                width: 80%;
                margin: .16rem 0;
            }
            span{
                color:#fff;
                font-size: 0.24rem;
            }
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
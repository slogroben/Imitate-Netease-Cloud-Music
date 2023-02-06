<template>
    <div>
        <div class="itemMusicTop">
            <img :src="playlist.coverImgUrl" class="bgimg">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="$router.push({name:'home'})">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
                <span>歌单</span>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-31liebiao"></use>
                </svg>
            </div>
        </div>
        <div class="itemMusicCenter">
            <div class="imgBox">
                <van-image
                width="100"
                height="100"
                :src="playlist.coverImgUrl"
                />
            </div>
            <div class="msgbox">
                <div>
                    <p>{{playlist.name}}</p>
                </div>
                <div>
                    <van-image
                    round
                    width="40px"
                    height="40px"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(props){
        console.log(JSON.parse(sessionStorage.getItem('itemData')).playlist.creator);
        if((props.playlist.creator=='')){
           
            props.playlist=JSON.parse(sessionStorage.getItem('itemData')).playlist.creator
            console.log(props.playlist.creator); 
            console.log(props.playlist);
        }
    },
    props:['playlist']
}
</script>

<style lang="less" scoped>
.icon{
        fill:#fff
    }
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    .bgimg{
            width: 100%;
            height: 8rem;
            position: fixed;
            z-index: -1;
            filter: blur(30px);
        }
    .itemLeft,.itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: .4rem;
            color: #fff;
        }
    }
    .icon{
        fill:#fff
    }
    
}
.itemMusicCenter{
    display: flex;
    justify-content: baseline;
    padding: 10px;
}
</style>
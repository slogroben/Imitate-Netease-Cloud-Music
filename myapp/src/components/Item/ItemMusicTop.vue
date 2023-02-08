<template>
    <div>
        <img :src="playlist.coverImgUrl" class="bgimg">
        <div class="itemMusicTop">
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
        <div class="itemMusicCenter" v-if="playlist">
            <div class="imgBox">
                <van-image
                class="musicListImg"
                radius='20px'
                :src="playlist.coverImgUrl"
                />
            </div>
            <div class="msgbox">
                <div>
                    <p class="playListName">{{playlist.name}}</p>
                </div>
                <div class="author">
                    <van-image
                    round
                    width="40px"
                    height="40px"
                    :src="playlist.creator.avatarUrl"
                    />
                    <span class="nickname">{{playlist.creator.nickname}}</span>
                </div>
                <div class="descriptionBox">
                    <div class="description">{{playlist.description}}</div>
                </div>
            </div>
        </div>
        <div class="iconList">
            <span>
                <label>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaoxi"></use>
                    </svg>
                    <div>{{playlist.commentCount}}</div>
                </label>
            </span>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <div>{{playlist.shareCount}}</div>
            </span>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <div>下载</div>
            </span>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-show_duoxuan"></use>
                </svg>
                <div>多选</div>
            </span>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {

    props:['playlist']
}
</script>

<style lang="less" scoped>
.icon{
    fill: #fff;
}
.bgimg{
            width: 100%;
            height: 10rem;
            position: fixed;
            z-index: -1;
            filter: blur(30px);
        }
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
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
    padding: .2rem;
    overflow: hidden;
    .imgBox{
        padding: 0;
        .musicListImg{
            width: 3rem;
            height: 100%;
        }
    }
    .msgbox{
        margin: 0 .2rem;
        .playListName{
            font-size: .36rem;
            color: #fff;
            font-weight: 700;
        }
        .author{
            margin: .2rem 0;
            .nickname{
                color: rgb(88, 83, 83);
                font-size: .3rem;
                margin: .2rem 0 .2rem  .4rem;
                position: absolute;
            }  
        }
        .descriptionBox{
                width: 100%;
                height: 55px;
                overflow:scroll;
                .description{
                    height: 100%;
                    color: #181515;
                    font-size: .26rem;
                }
            }
    }
}
.iconList{
        display: flex;
        justify-content: space-around;
        margin: .4rem;
        .icon{
            width: 0.7rem;
            height: 0.7rem;
        }
        div{
            color: #1d1c1c;
        }
    }
</style>
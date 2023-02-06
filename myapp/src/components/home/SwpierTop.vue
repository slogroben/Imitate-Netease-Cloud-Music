<template>
    <div class="swipeBox">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { reactive,onMounted } from 'vue';

import api from '@/api';
import messageCode from '@/utils/messageCode';
export default {
    name:'SwpierTop',
    setup() {
    let state = reactive({
        images:[
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        ]
    })
    onMounted(async()=>{
        let type=messageCode.bannerType.iphone
        let response=await api.getBanners(type)
        state.images=response.data.banners
    })
    return { state };
  },
  mounted(){
  }
}
</script>

<style lang="less">
.swipeBox{
    .van-swipe{
        width: 100%;
        height: 3rem;
        .van-swipe__track {
            .van-swipe-item{
                padding: 0 .2rem;
                img{
                width: 100%;
                height: 3rem;
                border-radius: 10px;
            }
            }
        }
        .van-swipe__indicator--active{
                background-color:rgb(197, 69, 23);
        }
    }
}
</style>
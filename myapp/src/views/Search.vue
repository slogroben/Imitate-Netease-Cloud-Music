<template>
  <div class="searchBox">
    <div class="top">
        <span>
            <svg class="icon" @click="$router.push('/')" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </span>
        <input type="text" v-model="keyword" autofocus="autofocus" :placeholder="showKeyword">
        <van-button @click="searchMusic" type="primary" size="small">搜索</van-button>
    </div>
    <div class="searchCenter" v-if="!showFlag">
        <div class="center">
            <p class="topTxt">搜索历史</p>
            <div class="historyBox">
                <van-tag v-for="(k,index) in historyKeyWord" closeable round  @close="historyKeyWord.splice(index,1)" @click="keyword=k" size="large" :key="k">{{k}}</van-tag>
            </div>
        </div>
    </div>
    <div class="searchShow" v-if="showFlag">
        <div class="searchType">
            <div class="divActive">歌曲</div>
            <div>歌单</div>
            <div>视频</div>
            <div>歌手</div>
        </div>
        <div>
            <show-songs-list :songs="searchObj.songs"></show-songs-list>
        </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import messageCode from '@/utils/messageCode'
import { mapMutations } from 'vuex'
import ShowSongsList from '@/components/all/ShowSongsList.vue'
export default {
  components: { ShowSongsList },
    data(){
        return {
            keyword:'',
            showKeyword:'',
            realkeyword:'',
            historyKeyWord:[],
            showFlag:false,
            songs:'',
            searchObj:{
                songs:''
            },
        }
    },
    computed:{
        
    },
    methods:{
        ...mapMutations(['addPlayList','addAllPlayList']),
        async searchMusic(){
            let value=this.keyword.trim()?this.keyword:this.realkeyword
            this.historyKeyWord.unshift(value)
            localStorage.setItem('keyword',JSON.stringify(this.historyKeyWord))
            this.showFlag=true
            let response=await api.getSearchList(value,messageCode.searchMusic.songs)
            console.log(response);
            this.searchObj.songs=response.data.result.songs
        },
        async getDefaultKeyWord(){
            let response=await api.getSearchDefault()
            this.showKeyword=response.data.data.showKeyword
            this.realkeyword=response.data.data.realkeyword
        },
        getHistoryKeyWord(){
            if(localStorage.getItem('keyword')){
                this.historyKeyWord=[...new Set(JSON.parse(localStorage.getItem('keyword')))]
                localStorage.setItem('keyword',JSON.stringify(this.historyKeyWord)) 
            }
        }
    },
    mounted(){
        this.getDefaultKeyWord()
        this.getHistoryKeyWord()
    }
}
</script>

<style lang="less" scoped>
.searchBox{
    .top{
        display: flex;
        justify-content:space-around;
        padding: .2rem;
        input{
            width: 70%;
            border-top: none;
            border-left: none;
            border-right:none ;
            border-color: rgb(141, 141, 145);
        }
    }
    .searchCenter{
        .center{
            padding: .2rem .2rem;
        .topTxt{
            font-weight: 700;
            font-size: .3rem;
        }
        .historyBox{
            padding: 10px;
        }
        }
    }
    .searchShow{
    width: 100%;
    .searchType{
        width: 100%;
        display: flex;
        justify-content:space-around;
        padding: .2rem .2rem;
        div{
            display: inline-block;
            width: 1rem;
            font-size: .4rem;
            margin: 10px;
        }
        .divActive{
            border-bottom: 5px solid #c75e5e;
        }
    }

}

}
</style>
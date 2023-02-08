<template>
    <div>
        <div class="itemMusicTop">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="modifyShowMusicView(false)">
                    <use xlink:href="#icon-fanhui"></use>
                </svg>
                <span>{{playingMusic.name}}</span>
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
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['playList','playListIndex']),
        ...mapGetters(['playingMusic'])
        
    },
    methods:{
        ...mapMutations(['modifyShowMusicView'])
    }
}
</script>

<style lang="less" scoped>
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
</style>
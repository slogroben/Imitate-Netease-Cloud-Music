<template>
  <div class="iconBox">
    <span>
        <label>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meirituijian"></use>
            </svg>
            <p>每日推荐</p>
        </label>
    </span>
    <span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diantai"></use>
        </svg>
        <p>私人FM</p>
    </span>
    <span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yinlegedan-"></use>
        </svg>
        <p>推荐歌单</p>
    </span>
    <span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paihangbang"></use>
        </svg>
        <p>排行榜</p>
    </span>
  </div>
</template>

<script>
export default {
    name:'IconList'
}
</script>

<style lang="less" scoped>
.iconBox{
    display: flex;
    justify-content: space-around;
    padding: .2rem 0;
    .icon{
        width: 1rem;
        height: 1rem;
    }
}
</style>
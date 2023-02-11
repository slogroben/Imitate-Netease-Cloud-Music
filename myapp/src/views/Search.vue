<template>
  <div class="searchBox">
    <div class="top">
        <span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
        </span>
        <input type="text" autofocus="autofocus">
        <van-button type="primary" size="small">搜索</van-button>
    </div>
  </div>
</template>

<script>
export default {

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
}
</style>
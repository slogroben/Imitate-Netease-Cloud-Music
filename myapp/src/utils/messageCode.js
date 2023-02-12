
let messageCode={
    RequestCode:{
        'error':0,
        'success':1
    },
    bannerType:{
        'pc':0,
        'android':1,
        'iphone':2,
        'ipad':3
    },
    searchMusic:{
        // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
        'songs':1,
        'Album':10,
        'singer':100,
        'musicList':1000,
        'user':1002,
        'mv':1004,
        'lyric':1006,
        'radio':1006,
    }
}

export default messageCode

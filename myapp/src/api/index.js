import messageCode from "@/utils/messageCode";
import service from "@/utils/request";

const api={
    //获取轮播图
    getBanners:async(type)=>{
        return service.getReq('/banner?type='+type)
    },
    //获取歌单列表
    getDayMusicList:async(limit)=>{
        return service.getReq('/personalized?limit='+limit)
    },
    //获取歌单详细信息
    getDayMusicListDetail:async(id)=>{
        return service.getReq('/playlist/detail?id='+id)
    },
    //获取歌单中的所有音乐
    getDayMusicListAllMusic:async(id,limit,offset)=>{
        return service.getReq('/playlist/track/all?id='+id+'&limit='+limit+'&offset='+offset)
    },
    //获取音乐
    getMusic:async(id)=>{
        return service.getReq('/playlist/update/playcount?id='+id)
    },
    //获取歌词
    getMusicLyric:async(id)=>{
        return service.getReq('/lyric?id='+id)
    },
    
}

export default api
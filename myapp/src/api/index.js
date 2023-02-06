import messageCode from "@/utils/messageCode";
import service from "@/utils/request";

const api={
    getBanners:async(type)=>{
        return service.getReq('/banner?type='+type)
    },
    getDayMusicList:async(limit)=>{
        return service.getReq('/personalized?limit='+limit)
    },
    getDayMusicListDetail:async(id)=>{
        return service.getReq('/playlist/detail?id='+id)
    },
    
}

export default api
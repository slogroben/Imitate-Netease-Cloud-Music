import api from '@/api'
import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[
      {
        "name": "浮夸",
        "id": 66282,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 2116,
                "name": "陈奕迅",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000005290680",
        "fee": 8,
        "v": 157,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 6491,
            "name": "U87",
            "picUrl": "https://p2.music.126.net/xuFy0k8O_xKuAqbbjC24Ig==/109951166497586944.jpg",
            "tns": [],
            "pic_str": "109951166497586944",
            "pic": 109951166497586940
        },
        "dt": 283520,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 11343456,
            "vd": -51579,
            "sr": 44100
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 6806091,
            "vd": -48992,
            "sr": 44100
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 4537408,
            "vd": -47374,
            "sr": 44100
        },
        "sq": {
            "br": 906993,
            "fid": 0,
            "size": 32143833,
            "vd": -51693,
            "sr": 44100
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 5,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 157,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "awardTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mv": 303285,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "publishTime": 1104508800000
    }
    ],
    playListIndex:0,
    playFlag:false,
    showMusicView:false,
    lyricList:'',
    currentTime:'',
    duration:''
  },
  getters: {
    playingMusic(context){
        return context.playList[context.playListIndex]
    }
  },
  mutations: {
    //添加一首歌曲到播放列表
    addPlayList(context,music){
      for (const index in context.playList) {
        if(context.playList[index]==music){
          context.playListIndex=index-0
          context.playFlag=true
          return 
        }
      }
      context.playList.push(music)
      context.playListIndex=context.playList.length-1
      context.playFlag=true
    },
    //添加歌单到播放列表
    addAllPlayList(context,musicList){
      context.playList=musicList
      context.playListIndex=context.playList.length-1
      context.playListIndex=0
      context.playFlag=true
    },
    //修改playFlag
    rePlayFlag(context){
      context.playFlag=!context.playFlag
    },
    //修改playFlag为固定值
    modifyPlayFlag(context,playFlag){
      context.playFlag=playFlag
    },
    //
    modifyShowMusicView(context,value){
      context.showMusicView=value
    },
    modifyLyric(context,value){
      context.lyricList=value
    },
    modifyCurrentTime(context,value){
      context.currentTime=value
    },
    modifyDuration(context,value){
      context.duration=value
    },
  },
  actions: {
     getMusicLyric:async(context,id)=>{
      let response=await api.getMusicLyric(id)
      context.commit('modifyLyric',response.data) 
  }
  },
  modules: {
  }
})

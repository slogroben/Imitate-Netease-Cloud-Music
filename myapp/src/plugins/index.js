import { Swipe,SwipeItem,Button,Image,List,Cell,Popup,Progress ,Tag,Toast, Tabbar, TabbarItem    } from "vant";

let plugins=[
    Swipe,SwipeItem,Button,Image,List,Cell,Popup,Progress,Tag,Toast , Tabbar, TabbarItem 
]

function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}

export default getVant
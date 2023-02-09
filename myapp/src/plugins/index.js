import { Swipe,SwipeItem,Button,Image,List,Cell,Popup,Progress  } from "vant";

let plugins=[
    Swipe,SwipeItem,Button,Image,List,Cell,Popup,Progress 
]

function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}

export default getVant
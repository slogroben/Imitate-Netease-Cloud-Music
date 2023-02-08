import { Swipe,SwipeItem,Button,Image,List,Cell,Popup } from "vant";
let plugins=[
    Swipe,SwipeItem,Button,Image,List,Cell,Popup
]

function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}

export default getVant
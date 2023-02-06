import { Swipe,SwipeItem,Button,Image } from "vant";
let plugins=[
    Swipe,SwipeItem,Button,Image
]

function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}

export default getVant
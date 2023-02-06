import axios from "axios";

const service=axios.create({
    baseURL:'http://localhost:3000/',
    timeout:8000
})


service.interceptors.request.use(
    (config)=>{
        return config
    },
    (error)=>{
        return error
    }
)
service.interceptors.response.use(
    (config)=>{
        return config
    },
    (error)=>{
        return error
    }
)




service.getReq=(url)=>{
    return service({
        method:'get',
        url:url
    })
}

service.postReq=(url,data,headers)=>{
    return service({
        method:'get',
        url,
        data,
        headers,
    })
}


export default service
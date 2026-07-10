import { useAuthStore } from "@/stores/auth.store";
import axios from "axios";
export const apiRequest =  axios.create({
    baseURL:`http://localhost:5000/api/v1`,
    withCredentials:true
})
apiRequest.interceptors.request.use((config)=>{
    try {
        const state = useAuthStore.getState()
        const token = state?.accessToken
        
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
    } catch (error) {
        console.error('Error accesssing auth token', error)

        
    }
    return config
   
  })
let failedQueue = []
let isRefreshing = false
const processQueue = (error)=>{
    failedQueue.forEach(prom=> {
        if(error){
          prom.reject()
        }else{
            prom.resolve()
        }
        
    });
    failedQueue = []
    isRefreshing = false

}
apiRequest.interceptors.response.use(
    (response)=>response,
    async(error)=>{
        console.log('this is the error', error)
        let  originalRequest = error.config
        if (originalRequest._skipInterceptor                                                         ) {
            return Promise.reject(error);
        }
        if(isRefreshing){
            return new Promise((resolve, reject)=>{
                failedQueue.push({resolve, reject})
            })
              .then(()=>apiRequest(originalRequest))
              .catch((error)=>Promise.reject(error))


        }
        if(error.response?.status == 401 && !originalRequest._retry){
            isRefreshing = true
            originalRequest._retry = true        
            
            try {
                await useAuthStore.getState().refreshTokenFn()
                processQueue(null)
                return apiRequest(originalRequest)
                
            } catch (refreshError) {
                processQueue(refreshError)
                console.log('this is the error', refreshError)
               // window.location.href = '/login'
                return Promise.reject(error)

                
                
            }finally{
                isRefreshing = false
            }


        }
        return Promise.reject(error)

    }
)

import { apiRequest } from "@/lib/apiRequest"
import {create}  from "zustand"
import {toast} from 'react-hot-toast'
export const useAuthStore = create((set,get)=>({
    isSigningUp:false,
    isSigningIn:false,
    isAuthenticated:false,
    isUpdating:false,
    userInfo:[],
    isSendingEmail:false,
    isLoggingOut:false,
    accessToken:'' ,
    refreshToken:async()=>{
        try {
            const res = await apiRequest.post('/auth/refresh')
            console.log(res.data)
            set({accessToken:res.data.accessToken})
            return res
            
        } catch (error) {
            
        }

    },
    signUp:async(data)=>{
        try {
            set({isSigningUp:true})
            const res =await apiRequest.post('/auth/register', data)  
            toast.success(res.data.message)   
            return res    
        } catch (error) {
                toast.error(error?.response?.data?.message || 'Something went wrong')
            
            
        }finally{
            set({isSigningUp:false})
        }
    },
    sendingEmail: async(data)=>{
        try {
            const res = await apiRequest.post('/send_email', data)
            set({isSendingEmail:true})
            toast.success(res?.data?.message)
            return res.data
            
        } catch (error) {
            toast.error(error?.response?.data?.message || "something went wrong")
            set({isSendingEmail:false})
        }finally{
            set({isSendingEmail:false})
        }
    },
    signIn:async(data)=>{
        
        try {
            set({isSigningIn:true})
            const res = await apiRequest.post('/auth/login', data)
            console.log(res.data.accessToken)  
            console.log(res.data.existingUser) 
            set({accessToken:res.data.accessToken})        
            set({userInfo: [res.data.existingUser]})
            set({isAuthenticated:true})
            toast.success(res.data.message)
            return res
                  
        } catch (error) {
                toast.error(error?.response?.data?.message || 'something went wrong')
            
        }finally{
            set({isSigningIn:false})
        }

    },
    updateUserInfo: async(data)=>{
        console.log(data)
        try {
            const res = await apiRequest.put(`/users`)
            set({isUpdating:true})

            
        } catch (error) {
            toast.error(error?.response?.data?.message || 'something went wrong')
            set({isUpdating:false})
            
        }

    },
    logOut: async()=>{
        try {
            const res = await apiRequest.post('/auth/logout')
            set({userInfo: []})
            set({isLoggingOut:true})
            
        } catch (error) {
            toast.error(error?.response?.data?.message)
            set({isLoggingOut:false})
            
        }finally{
            set({
                isLoggingOut:false
            })
        }
    }



}))
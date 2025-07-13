import { apiRequest } from "@/lib/apiRequest"
import {create}  from "zustand"
import {toast} from 'react-hot-toast'
export const useAuthStore = create((set,get)=>({
    isSigningUp:false,
    isSigningIn:false,
    isAuthenticated:false,
    userInfo:[],
    signUp:async(data)=>{
        try {
            set({isSigningUp:true})
            const res =await apiRequest.post('/auth/register', data)  
            toast.success(res.data.message)   
            return res    
        } catch (error) {
            console.log('register error', error)
            toast.error(error?.response?.data?.message)
            
            
        }finally{
            set({isSigningUp:false})
        }
    },
    signIn:async(data)=>{
        
        try {
            set({isSigningIn:true})
            const res = await apiRequest.post('/auth/login', data)  
            console.log(res.data.existingUser)          
            set({userInfo: [res.data.existingUser]})
            set({isAuthenticated:true})
            toast.success(res.data.message)
            return res
                  
        } catch (error) {
            console.log('login error',error)
            toast.error(error?.response?.data?.message || 'something went wrong')
            
        }finally{
            set({isSigningIn:false})
        }

    },
    logout: async()=>{
        try {
            const res = await apiRequest.post('/auth/logout')
            set({userInfo: []})
            set({isAuthenticated:false})
            
        } catch (error) {
            toast.error(error?.response?.data?.message)
            
        }
    }



}))
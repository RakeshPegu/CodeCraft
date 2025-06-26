import { apiRequest } from "@/lib/apiRequest"
import {create}  from "zustand"
export const authStore = create((set,get)=>({
    isSigningUp:false,
    isSigningIn:false,
    checkAuth:null,
    signUp:async(data)=>{
        try {
            set({isSigningUp:true})
            const res = apiRequest.post('/auth/register', data)            
        } catch (error) {
            console.log('register error', error)
            
            
        }finally{
            set({isSigningUp:false})
        }
    },
    singIn:async(data)=>{
        try {
            set({isSigningIn:true})
            const res = await apiRequest.post('/auth/login', data) 
            console.log(res) 
            set({checkAuth:res.data})
                  
        } catch (error) {
            console.log('login error',error)
            
        }finally{
            set({isSigningIn:false})
        }

    }



}))
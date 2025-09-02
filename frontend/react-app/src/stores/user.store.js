import { apiRequest } from '@/lib/apiRequest'
import toast from 'react-hot-toast'
import {create} from 'zustand'
export const useUserStore = create((set, get)=>({
    isDeletinAccount:false,
    deleteUserAccount : async(data)=>{
         try {
            const res = apiRequest.post('/users', data)
            set({isDeletinAccount:true})
            
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
            set({isDeletinAccount:false})
            
        }finally{
            set({isDeletinAccount:false})
        }
    }
}))

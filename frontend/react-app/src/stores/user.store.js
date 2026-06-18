import { apiRequest } from '@/lib/apiRequest'
import toast from 'react-hot-toast'
import {create} from 'zustand'
import { useAuthStore } from './auth.store'
export const useUserStore = create((set, get)=>({
    isDeletinAccount:false,
    deleteUserAccount : async(data)=>{
         try {
            const res = await apiRequest.post('/users/delete_account', data)
            useAuthStore.setState({
                userInfo:null,
                isAuthenticated:false

            })
            set({
                isDeletinAccount:true,
                
            })
            toast.success('Deleted successfully')
            return true
            
        } catch (error) {
            
            toast.error(error?.response?.data?.message || "Something went wrong")
            set({isDeletinAccount:false})
            
        }finally{
            set({isDeletinAccount:false})
        }
    }
}))

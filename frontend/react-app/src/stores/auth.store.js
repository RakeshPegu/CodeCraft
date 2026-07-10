import { apiRequest } from "@/lib/apiRequest"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { toast } from 'react-hot-toast'

export const useAuthStore = create(
    // persist is zustand middleWare that saves our store data to browser storage(localstorage by default)
    // so it survives page refreshes
    persist(
    (set, get) => ({
      isSigningUp: false,
      isSigningIn: false,
      isAuthenticated: false,
      isUpdating: false,
      userInfo: null,  
      isSendingEmail: false,
      isLoggingOut: false,
      accessToken: '',
    
      signUp: async (data) => {
        try {
          set({ isSigningUp: true })
          const res = await apiRequest.post('/auth/signup_with_password', data)
          toast.success(res.data.message)
          return res
        } catch (error) {
          console.log('this is the error',error?.response?.data?.message)
          toast.error(error?.response?.data?.message || 'Something went wrong')
        } finally {
          set({ isSigningUp: false })
        }
      },
      setUserInfo: (data)=>{
        set({
          userInfo:data,
          isAuthenticated:true
        })

      },
      setAccessToken: (accessToken)=>{
        set({accessToken:accessToken})

      },
      refreshTokenFn: async()=>{
        try {
          const res = await apiRequest.post('/auth/refresh_token',{}, {_skipInterceptor:true})
          console.log('this is new accessToken got from refresh_token', res.data)
          set({accessToken:res.data.accessToken})
          
        } catch (error) {
          console.log(error)
          throw error

          
        }

      },
     
      sendingEmail: async (data) => {
        try {
          set({ isSendingEmail: true })
          const res = await apiRequest.post('/send_email', data)
          toast.success(res?.data?.message)
      
        } catch (error) {
          toast.error(error?.response?.data?.message || "Something went wrong")
        } finally {
          set({ isSendingEmail: false })
        }
      },

      signIn: async (data) => {
        try {
          set({ isSigningIn: true })
          const res = await apiRequest.post('/auth/signin_with_password', data)
          set({
            accessToken: res.data.accessToken,
            userInfo: res.data.existingUser._doc,  
            isAuthenticated: true
          })      
          
          toast.success(res.data.message)
          return true
        } catch (error) {
          toast.error(error?.response?.data?.message || 'Something went wrong')
          return false
        } finally {
          set({ isSigningIn: false })
        }
      },
      updateUserInfo: async (data) => {
        try {
          set({ isUpdating: true })
          const res = await apiRequest.put('/users', data)
          set({ userInfo: res.data })
          toast.success('Profile updated successfully')
          return res
        } catch (error) {
          toast.error(error?.response?.data?.message || 'Something went wrong')
        } finally {
          set({ isUpdating: false })
        }
      },


      logOut: async () => {
        console.log('trigger')
        try {
          set({ isLoggingOut: true })
          const res = await apiRequest.post('/auth/logout')
                   
          set({
            userInfo: null,
            accessToken: '',
            isAuthenticated: false
          })
          return res.data
          
          toast.success('Logged out successfully')
        } catch (error) {
          toast.error(error?.response?.data?.message || 'Logout failed')
        } finally {
          set({ isLoggingOut: false })
        }
      }
    }),
    {
      name:"auth-store",
      partialize: (state)=>({
        userInfo: state.userInfo,
        isAuthenticated: state.isAuthenticated,

        
      })
    }
  )
    
  
)
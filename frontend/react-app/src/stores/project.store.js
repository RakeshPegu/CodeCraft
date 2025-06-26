import { apiRequest } from '@/lib/apiRequest'
import { create } from 'zustand'

export const projectAuth = create((set, get)=>({
    isCreactingProject:false,
    isUpdatingProject:false,
    checkProjects:null,
    checkProject:null,
    isDeletingProject:false,
    createProject:async(data)=>{
        try {
            const res = await apiRequest.post('/projects',data)
            set({isCreactingProject:true})
            
        } catch (error) {
            console.log('create project error', error)
            
        }finally{
            set({isCreactingProject:false})
        }
    },
    
    updateProject: async(data)=>{
        try {
            const res = await apiRequest.put(`/project/`, data)
            
            
        } catch (error) {
            console.log('update project error', error)
            
        }finally{
            set({isUpdatingProject:false})
        }
    },
    getProjects: async()=>{
        try {
            const res = await apiRequest.get('/projects') 
            console.log(res)
            set({checkProjects:res.data})           
        } catch (error) {
            console.log('get projects error', error)
            
        }
        
    },
    getProject: async()=>{
        try {
            const res = await apiRequest.get('/projects/:projectId')
            console.log('get project info', res.data)
            set({getProject:res.data})
            
        } catch (error) {
            console.log('get project error', error)
            
        }
    }

}))
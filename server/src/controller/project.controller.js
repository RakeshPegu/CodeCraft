import { projectModel } from "../lib/db.js"
import mongoose from 'mongoose'
import {z} from 'zod'
const projectValidateSchema = z.object({
    name:z.string().min(3, 'Project name must be atleast of 3 character'),
    description:z.string(10, 'description must be of 10 characters'),

})
const projectSchema = z.object
export const createProject = async(req, res, next)=>{
    const userRole = req.session.userRole
    const {name, description, image} = projectValidateSchema(req.body)
    try {      
        if(userRole !== 'admin'){
            return res.status(403).json({message:'not authorized'})
        }
        if(!name || !description){
            return res.status(400).json({message:'Name and description must'})
        }
        const project = await projectModel.create({name, description, image})
        res.status(200).json({message:'new project has been created'})
    } catch (error) {
        console.log('create project error', error)
        next(error)
    }
}
export const getProjects = async(req, res, next)=>{
    try {
        const projectsInfo = await projectModel.find()
        res.status(200).json({success:true, projectsInfo})
    } catch (error) {
        console.log('',error)
        next(error)
    }
}
export const getProject = async(req, res, next)=>{
    const projectId = req.params.id
    try {
        const projectInfo = await projectModel.findById(projectId)
        if(!projectInfo){
            return res.status(404).json({message:'Not found'})
        }
        res.status(200).json({success:true, projectInfo})
    } catch (error) {
        console.log('',error)
        next(error)
    }
}
export const updateProject = async(req, res, next)=>{
      const userRole = req.session.userRole
      let  projectId = req.params.id
      const {...newProjectInfo} = req.body
    try {
        if(userRole !== 'admin'){
            return res.status(403).json({message:'not authorized'})
        }
        const projectInfo = await projectModel.findById(projectId)
        if(!projectInfo){
            return res.status(404).json({message:'Not found'})
        }
        const updatedInfo= await projectModel.findByIdAndUpdate(projectId, {$set:{...newProjectInfo}})
        res.status(200).json({success:true, updatedInfo})
    } catch (error) {
        console.log('this is the update project error',error)
        next(error)
    }
}
export const deleteProject = async(req, res, next)=>{
      const userRole = req.session.userRole
      const projectId = req.params.id
    try {
         if(userRole !== 'admin'){
            return res.status(403).json({message:'not authorized'})
        }
        const projectInfo = await projectModel.findById(projectId)
        if(!projectInfo){
            return res.status(404).json({message:'Not found'})
        }
        await projectModel.findByIdAndDelete(projectId)
        res.status(200).json({ success:true, message:'project has been deleted successfully'})
    } catch (error) {
        console.log('',error)
        next(error)
    }
}
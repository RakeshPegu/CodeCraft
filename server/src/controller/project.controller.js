import { projectModel } from "../lib/db.js"

export const createProject = async(req, res)=>{
    const userRole = req.session.userRole
    const {name, description, images} = req.body
    try {        
        if(userRole !== 'admin'){
            return res.status(403).json({message:'not authorized'})
        }
        if(!name || !description){
            return res.status(400).json({message:'Name and description must'})
        }
        const project = await projectModel.create({name, description, images})
        res.status(200).json({message:'new project has been created'})
    } catch (error) {
        console.log('create project error', error)
        res.status(200).json({success:false, message:'Something went wrong'})
        
    }
}
export const getProjects = async(req, res)=>{
    try {
        const projectsInfo = await projectModel.find()
        res.status(200).json({success:true, projectsInfo})
        
    } catch (error) {
        console.log('',error)
        res.status(500).json({success:false, message:'something went wrong'})
        
    }
}
export const getProject = async(req, res)=>{
    const projectId = req.params.id
    try {
        const projectInfo = await projectModel.findById(projectId)
        if(!projectInfo){
            return res.status(404).json({message:'Not found'})
        }
        res.status(200).json({success:true, projectInfo})
    } catch (error) {
        console.log('',error)
        res.status(500).json({success:false, message:'something went wrong'})
        
    }
}
export const updateProject = async(req, res)=>{
      const userRole = req.session.userRole
      const projectId = req.params.id
      const {...newProjectInfo} = req.body

    try {
         if(userRole !== 'admin'){
            return res.status(403).json({message:'not authorized'})
        }
        const projectInfo = await projectModel.findById(projectId)
        if(!projectInfo){
            return res.status(404).json({message:'Not found'})
        }
        const updatedInfo= await projectModel.findByIdAndUpdate({projectId}, {$set:{...newProjectInfo}})
        res.status(200).json({success:true, updatedInfo})
        
    } catch (error) {
        console.log('',error)
        res.status(500).json({success:false, message:'something went wrong'})
        
    }
}
export const deleteProject = async(req, res)=>{
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
        res.status(500).json({success:false, message:'something went wrong'})
        
    }
}
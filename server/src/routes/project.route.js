import express from 'express'
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controller/project.controller.js'
const router = express.Router()
router.post('/',createProject)
router.get('/', getProjects)
router.get('/:id', getProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)
export default router;
import express from 'express'
import { createProject, deleteProject, getProject, getProjects, updateProject } from '../controller/project.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
const router = express.Router()
router.post('/',verifyToken, createProject)
router.get('/',verifyToken, getProjects)
router.get('/:id',verifyToken, getProject)
router.put('/:id',verifyToken, updateProject)
router.delete('/:id',verifyToken, deleteProject)
export default router;
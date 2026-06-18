import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { testProtectedRoute } from '../controller/projectedController.js'
const router = express.Router()
router.get('/test', verifyToken, testProtectedRoute)
export default router;

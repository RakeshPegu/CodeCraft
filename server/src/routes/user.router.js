import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controller/user.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { slidingWindowCounterRateLimiter } from '../middleware/rateLimiting.js'
const router = express.Router()
router.get('/',verifyToken, slidingWindowCounterRateLimiter({endpoint:"get_users",maxRequests:50, windowInSeconds:30}), getUsers)
router.get('/:id',verifyToken,slidingWindowCounterRateLimiter({endpoint:"get_user",maxRequests:50, windowInSeconds:30}), getUser)
router.delete('/:id',verifyToken,slidingWindowCounterRateLimiter({endpoint:"delete_user",maxRequests:10, windowInSeconds:60}), deleteUser)
router.put('/:id',verifyToken,slidingWindowCounterRateLimiter({endpoint:"update_user",maxRequests:3, windowInSeconds:60}), updateUser)
export default router;
import formation from './formation.route'
import user from './user.route'
import auth from './auth.route'
import { Router } from 'express'
const router = Router()
router.use('/user', user)
router.use('/auth', auth)
router.use('/formation', formation)
export default router
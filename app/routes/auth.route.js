import { Router } from 'express'
import * as controller from '../controllers/auth.controller.js'

const router = Router()

router.post('/login', controller.login)
router.post('/signup', controller.signup)

export default router

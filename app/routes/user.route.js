import { Router } from 'express'
import * as controller from '../controllers/user.controller.js'
import { authentificateMw } from '../utils/authentification.js'

const router = Router()

router.get('/', authentificateMw('admin'), controller.getAllUsers)
router.post('/', authentificateMw('admin'), controller.createUser)

router.get('/:id', controller.getUser)
router.put('/:id', authentificateMw('admin'), controller.updateUser)
router.delete('/:id', authentificateMw('admin'), controller.killUser)

export default router

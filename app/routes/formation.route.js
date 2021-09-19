import { Router } from 'express'
import * as controller from '../controllers/formation.controller.js'
    
const router = Router()
    
router.get('/', controller.getAllFormations)
router.post('/', controller.createFormation)
    
router.get('/:id', controller.getFormation)
router.put('/:id', controller.updateFormation)
router.delete('/:id', controller.killFormation)
    
export default router
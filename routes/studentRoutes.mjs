import express from "express"
import {
    getAllStudentsHandler,
    getStudentByIdHandler,
    createStudentHandler,
    updateStudentHandler,
    deleteStudentHandler
} from '../controllers/studentController.mjs'
import {validateStudentMiddleware} from '../middleware/validateRequest.mjs'

const router = express.Router()


router.get('/', getAllStudentsHandler)
router.get('/:id', getStudentByIdHandler)
router.post('/', validateStudentMiddleware, createStudentHandler)
router.put('/:id', validateStudentMiddleware, updateStudentHandler)
router.delete('/:Id', deleteStudentHandler)

export default router
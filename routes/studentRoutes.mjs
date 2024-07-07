import express from "express"
const router = express.Router()
import {
    getAllStudentsHandler,
    getStudentByIdHandler,
    createStudentHandler,
    updateStudentHandler,
    deleteStudentHanlder
} from '../controllers/studentController.mjs'

router.get('/', getAllStudentsHandler)
router.get('/:id', getStudentByIdHandler)
router.post('/', createStudentHandler)
router.put('/:id', updateStudentHandler)
router.delete('/:Id', deleteStudentHanlder)

export default router
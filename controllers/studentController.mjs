import { readStudents } from '../services/studentService.mjs'
import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from '../services/studentService.mjs'

export const getAllStudentsHandler = (req,res) => {
    const students = getAllStudents()
    res.json (students)
}

export const getStudentByIdHandler = (req,res) => {
    const student = getStudentById(parseInt(req.params.id))
    if (!student) return res.status(404).send('Student not found')
        res.json (student)
}

export const createStudentHandler = (req,res) => {
    const newStudent = createStudent(req.body)
    res.status(201).json(newStudent)
}

export const updateStudentHandler = (req,res) => {
    const updatedStudent = updateStudent(parseInt(req.params.id), req.body)
    if (!updatedStudent) return res.status(404).send('Student not found')
    res.json (updatedStudent)
}

export const deleteStudentHanlder = (req,res) => {
    const result = deleteStudent(parseInt(req.params.id))
    if (!result) return res.status(404).send('Student not found')
    res.send ('Student deleted')
}
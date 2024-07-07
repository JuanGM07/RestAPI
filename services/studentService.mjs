import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const studentsFilePath = path.join (__dirname, '../data/students.json')

// Lee los estudiantes del archivo JSON
export const readStudents = () => { 
    const data = fs.readFileSync(studentsFilePath, 'utf8')
    return JSON.parse(data)
}

// Escribe los estudiantes en el archivo JSON
export const writeStudents = (students) => {
    fs.writeFileSync(studentsFilePath, JSON.stringify(students,null,2))
}

// Obtiene todos los estudiantes
export const getAllStudents = () =>{
    return readStudents()
}

//Obtiene un estudiante por ID
export const getStudentById = (id) => {
    const students = readStudents()
    return students.find(student => student.id === id)
}

//Crea un nuevo estudiante
export const createStudent = (studentData) => {
    const students = readStudents()
    const newStudent = {
        id : students.length ? Math.max(...students.map(s=>s.id))+1:1,
        ...studentData
    }
    students.push(newStudent)
    writeStudents(students)
    return newStudent
}

// Actualiza un estudiante por ID
export const updateStudent = (id, studentData) => {
    const students = readStudents()
    const studentIndex = students.findIndex(student => student.id ===id)
    if (studentIndex ===-1) return null

    const updatedStudent ={...students[studentIndex], ...studentData}
    students[studentIndex] = updatedStudent
    writeStudents(students)
    return updatedStudent
}

//ELimina un estudiante por ID
export const deleteStudent = (id) => {
    const students = readStudents()
    const studentIndex = students.findIndex(student => student.id ===id)
    if (studentIndex === -1 ) return null

    students.splice(studentIndex, 1)
    writeStudents(students)
    return true
}
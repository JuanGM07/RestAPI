import express from 'express'
import fs, { readFileSync } from 'fs'
import { parse } from 'path'
import { stringify } from 'querystring'

var port=3000
var app=express()

app.use(express.json())

const readStudents=()=>{
    const data=readFileSync('students.json')
    return JSON.parse(data)
}

const writeStudents=(data)=>{
    fs.writeFileSync('students.json',JSON.stringify(data,null,2))
}

// EndPoint to read the entire students table
app.get('/students',(req,res)=>{
    res.json(readStudents())
})

// EndPoint to read a student by personal id
app.get('/students/:id',(req,res)=>{
    const students=readStudents()
    const student=students.find(s=>s.id===parseInt(req.params.id))
    if (!student) return res.status(404).send('Student not found')
    res.json(student)
})

// Endpoint to add a new student
app.post('/students',(req,res)=>{
    const students=readStudents()
    const newStudent={
        "id": students.length ? students[students.length - 1].id + 1 : 1,
        "name": req.body.name,
        "grades": req.body.grades
    }
    students.push(newStudent)
    writeStudents(students)
    res.status(201).json(newStudent)
})

//EndPoint to update an existing student
app.put('/students/:id',(req,res)=>{
    const students = readStudents()
    const student = students.find(s =>s.id===parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found')

    student.name = req.body.name || student.name
    student.grades = req.body.grades || student.grades

    writeStudents(students);

    res.send(student)
})

//EndPoint to delete an existing student
app.delete('/students/:id',(req,res)=>{
    let students = readStudents()
    const studentId = parseInt(req.params.id)
    console.log('Deleting student with ID: ${studentId} ')
    students=students.filter(s => s.id !==studentId) 
    writeStudents(students)
    res.status(204).send()
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
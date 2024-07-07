import {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} from '../services/studentService.mjs';

export const getAllStudentsHandler = (req, res) => {
    try {
        const students = getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const getStudentByIdHandler = (req, res) => {
    try {
        const student = getStudentById(parseInt(req.params.id));
        if (!student) return res.status(404).send('Student not found');
        res.json(student);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const createStudentHandler = (req, res) => {
    try {
        const newStudent = createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const updateStudentHandler = (req, res) => {
    try {
        const updatedStudent = updateStudent(parseInt(req.params.id), req.body);
        if (!updatedStudent) return res.status(404).send('Student not found');
        res.json(updatedStudent);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const deleteStudentHandler = (req, res) => {
    try {
        const result = deleteStudent(parseInt(req.params.id));
        if (!result) return res.status(404).send('Student not found');
        res.send('Student deleted');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

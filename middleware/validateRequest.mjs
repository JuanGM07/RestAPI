import { validateStudent } from "../validation/studentValidation.mjs"

export const validateStudentMiddleware = (req,res,next) => {
    const {error} = validateStudent(req.body)
    if (error){
        return res.status(400).send(error.details[0].message)
    }
    next()
}
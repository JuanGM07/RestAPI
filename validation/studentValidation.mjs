import Joi from 'joi'

const studentSchema = Joi.object ({
    name: Joi.string().required(),
    grades : Joi.array().items(Joi.number().min(0).max(10)).length(3).required()
})

export const validateStudent = (student) => {
    return studentSchema.validate(student)
}

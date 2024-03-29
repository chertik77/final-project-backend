import Joi from 'joi'
import isEmail from 'validator/lib/isEmail'

export const signupSchema = Joi.object({
  name: Joi.string().required().min(2),
  email: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!isEmail(value)) {
        return helper.message({ custom: 'email is invalid' })
      }
      return value
    }),
  password: Joi.string().min(8).required().max(64)
})

export const signinSchema = Joi.object({
  email: Joi.string()
    .required()
    .custom((value, helper) => {
      if (!isEmail(value)) {
        return helper.message({ custom: 'email is invalid' })
      }
      return value
    }),
  password: Joi.string().min(8).required().max(64)
})

export const editUserSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().custom((value, helper) => {
    if (!isEmail(value)) {
      return helper.message({ custom: 'email is invalid' })
    }
    return value
  }),
  password: Joi.string().min(8)
})

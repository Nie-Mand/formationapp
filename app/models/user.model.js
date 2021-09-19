import { Schema, model, models } from 'mongoose'
import { hashPassword } from '../utils/authentification'

const _user = Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cin: {
    type: String,
    required: true,
  },
  ville: String,
  codePostal: Number,
  role: {
    type: String,
    default: 'user',
  },
})

_user.pre('save', async function () {
  this.password = await hashPassword(this.password)
})

export default models.user || model('user', _user)

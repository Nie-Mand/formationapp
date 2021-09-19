import * as service from '../services/user.service'
import { createToken, verifyPassword } from '../utils/authentification'

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await service.findByEmail(email)
  if (!user) return res.status(401).end()
  const isPasswordCorrect = await verifyPassword(password, user.password)
  delete user.password
  if (!isPasswordCorrect) return res.status(401).end()
  const token = await createToken(user)
  return res.json({ token })
}

export const signup = async (req, res) => {
  const user = await service.createUser(req.body).then(data => data.toJSON())
  if (!user) return res.status(400).end()
  delete user.password
  const token = await createToken(user)
  return res.json({ token })
}

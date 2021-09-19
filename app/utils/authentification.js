import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const createToken = payload =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  })

export const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET)

export const hashPassword = password =>
  bcrypt.hash(password, Number(process.env.SALT))

export const verifyPassword = (password, hashed) =>
  bcrypt.compare(password, hashed)

export const authentificateMw =
  (...roles) =>
  async (req, res, next) => {
    const [token] = req.headers.authorization.split(' ').splice(1)
    const payload = await verifyToken(token)
    if ((!payload && roles.length !== 0) || roles.indexOf(req.user.role) !== -1)
      return res.status(401).end()
    req.user = payload
    next()
  }

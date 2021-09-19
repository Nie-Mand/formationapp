import User from '../models/user.model'

export const getAllUsers = () => User.find({}).lean()

export const createUser = data => User.create(data)

export const getUser = id => User.findById(id).lean()

export const updateUser = (id, data) => User.findByIdAndUpdate(id, data)

export const killUser = id => User.findByIdAndDelete(id)

export const findByEmail = email => User.findOne({ email }).lean()

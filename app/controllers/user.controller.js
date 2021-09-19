import * as service from '../services/user.service'

export const getAllUsers = async (req, res) => {
  return res.json(await service.getAllUsers())
}

export const createUser = async (req, res) => {
  return service
    .createUser(req.body)
    .then(user => res.json(user))
    .catch(() => res.status(400).end())
}

export const getUser = (req, res) => {
  return service
    .getUser(req.params.id)
    .then(user => res.json(user))
    .catch(() => res.status(500).end())
}

export const updateUser = (req, res) => {
  return service
    .updateUser(req.params.id, req.body)
    .then(user => res.json(user))
    .catch(() => res.status(500).end())
}

export const killUser = (req, res) => {
  return service
    .killUser(req.params.id)
    .then(user => res.json(user))
    .catch(() => res.status(400).end())
}

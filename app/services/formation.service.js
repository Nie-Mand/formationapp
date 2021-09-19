import Formation from '../models/formation.model'

export const getAllFormations = () => Formation.find({}).lean()

export const createFormation = data => Formation.create(data)

export const getFormation = id => Formation.findById(id).lean()

export const updateFormation = (id, data) =>
  Formation.findByIdAndUpdate(id, body)

export const killFormation = id => Formation.findByIdAndDelete(id)

import { Schema, model, models } from 'mongoose'

const _formation = Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  prof: String,
  image: String,
  place: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  durationDays: {
    type: Number,
    required: true,
  },
  durationHours: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date_debut: {
    type: Date,
    required: true,
  },
  date_fin: {
    type: Date,
    required: true,
  },
})

export default models.formation || model('formation', _formation)

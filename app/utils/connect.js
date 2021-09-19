import Mongoose from 'mongoose'

const Connect = cb => {
  const uri = process.env.MONGO_URI
  Mongoose.connect(uri)
    .then(() => console.log('Mongo Connected'))
    .then(cb)
    .catch(console.error)
}

export default Connect

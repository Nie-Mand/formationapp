import Mongoose from 'mongoose'

const Connect = () => {
  const uri = process.env.MONGO_URI
  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  Mongoose.connect(uri, options).then(() => console.log('Mongo Connected'))

  Mongoose.connection.on('error', e => console.error(e))
}
export default Connect

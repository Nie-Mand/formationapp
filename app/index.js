import dotenv from 'dotenv'
dotenv.config()
import Express from 'express'
import routes from './routes'
import cors from 'cors'
import xss from 'xss-clean'
import helmet from 'helmet'
import mongo from 'express-mongo-sanitize'

// If Db Connection Required
import Connect from './utils/connect'

const app = Express()

// Middlewares
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(xss())
app.use(helmet())
app.use(mongo())

// Routes
app.use(routes)

Connect(() => {
  app.listen(8000, () =>
    console.log('Server is running at http://localhost:8000')
  )
})

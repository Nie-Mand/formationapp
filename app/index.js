import dotenv from 'dotenv'
dotenv.config()
import Express from 'express'
import routes from './routes'
import cors from 'cors'
import { json } from 'body-parser'
import xss from 'xss-clean'
import helmet from 'helmet'
import mongo from 'express-mongo-sanitize'

// If Db Connection Required
import Connect from './utils/connect'

const app = Express()

// Middlewares
app.use(cors())
app.use(json())
app.use(xss())
app.use(helmet())
app.use(mongo())

// Routes
app.use(routes)
app.get('/', (req, res) => res.send('Hello, World!'))

app.listen(8000, () =>
  console.log('Server is running at http://localhost:8000')
)

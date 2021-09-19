import fs from 'fs'
import path from 'path'
import { capitalize } from 'lodash'

export const createRoute = async title => {
  const filePath = path.join(__dirname, `../app/routes/${title}.route.js`)
  if (fs.existsSync(filePath))
    throw new Error(`This Route Already Exists (${title}.route.js)`)
  fs.writeFile(
    filePath,
    `import { Router } from 'express'
import * as controller from '../controllers/${title}.controller.js'
    
const router = Router()
    
router.get('/', controller.getAll${capitalize(title)}s)
router.post('/', controller.create${capitalize(title)})
    
router.get('/:id', controller.get${capitalize(title)})
router.put('/:id', controller.update${capitalize(title)})
router.delete('/:id', controller.kill${capitalize(title)})
    
export default router`,
    () => console.log(`Created ${title} Route`)
  )
}

export const createController = async title => {
  const filePath = path.join(
    __dirname,
    `../app/controllers/${title}.controller.js`
  )
  if (fs.existsSync(filePath))
    throw new Error(`This Controller Already Exists (${title}.controller.js)`)

  fs.writeFile(
    filePath,
    `
export const getAll${capitalize(title)}s = (req, res) => {
    return res.send('get all ${title}s')
}

export const create${capitalize(title)} = (req, res) => {
    return res.send('create a ${title}')
}

export const get${capitalize(title)} = (req, res) => {
    return res.send('get a ${title}')
}

export const update${capitalize(title)} = (req, res) => {
    return res.send('update a ${title}')
}

export const kill${capitalize(title)} = (req, res) => {
    return res.send('kill a ${title}')
}`,
    () => console.log(`Created ${title} Controller`)
  )
}

export const addRoute = async (title, route) => {
  const content = fs
    .readFileSync(path.join(__dirname, `../app/routes/index.js`), 'utf-8')
    .split('\n')
    .filter(line => line !== '')
  const exporting = content.pop()
  fs.writeFile(
    path.join(__dirname, `../app/routes/index.js`),
    [
      `import ${title} from './${title}.route'`,
      content.join('\n'),
      `router.use('${route}', ${title})`,
      exporting,
    ].join('\n'),
    () => console.log(`Added ${title} to Routes`)
  )
}

export const createModel = async title => {
  const filePath = path.join(__dirname, `../app/models/${title}.model.js`)
  if (fs.existsSync(filePath))
    throw new Error(`This Model Already Exists (${title}.model.js)`)

  fs.writeFile(
    filePath,
    `import { Schema, model, models } from 'mongoose'

const _${title} = Schema({})

export default models.${title} || model('${title}', _${title})`,
    () => console.log(`Created ${title} Model`)
  )
}

export const createService = async title => {
  const filePath = path.join(__dirname, `../app/services/${title}.service.js`)
  if (fs.existsSync(filePath))
    throw new Error(`This Service Already Exists (${title}.service.js)`)

  fs.writeFile(
    filePath,
    `import ${capitalize(title)} from '../models/${title}.model'
    
export const getAll${capitalize(title)}s = () => ${capitalize(
      title
    )}.find({}).lean()

export const create${capitalize(title)} = data => {
    ${capitalize(title)}.create(data)
}
        
export const get${capitalize(title)} = id => {
    return ${capitalize(title)}.findById(id).lean()
}
        
export const update${capitalize(title)} = (id, data) => ${capitalize(
      title
    )}.findByIdAndUpdate(id, data)
        
export const kill${capitalize(title)} = id => ${capitalize(
      title
    )}.findByIdAndDelete(id)
`,
    () => console.log(`Created ${title} Service`)
  )
}

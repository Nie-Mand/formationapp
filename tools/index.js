import {
  createRoute,
  addRoute,
  createController,
  createModel,
  createService,
} from './utils'

const [, , what, title, _path] = process.argv

switch (what) {
  case 'route':
    const path = _path.charAt(0) !== '/' ? '/' + _path : _path

    createController(title)
      .then(() => createRoute(title))
      .then(() => addRoute(title, path))
      .catch(e => console.error(e.message))
    break
  case 'model':
    createModel(title)
      .then(() => createService(title))
      .catch(e => console.error(e.message))
    break
  default:
    console.log('Unrecognized Type to Generate')
    break
}

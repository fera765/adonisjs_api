'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/signup', 'UserController.store')
Route.post('/session', 'SessionController.store')

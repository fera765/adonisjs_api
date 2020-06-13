'use strict'
const User = use('App/Models/User')

class UserController {
  async store ({ request, auth, response }) {
    const userDate = request.only(['name', 'username', 'email', 'password'])

    try {
      const user = await User.create(userDate)

      const token = await auth.generate(user)

      return response.status(200).json({
        status: 'success',
        data: token
      })
    } catch (err) {
      return response.status(400).json({
        status: 'error',
        msg: 'Erro ao cadastrar usuario na plataforma'
      })
    }
  }
}

module.exports = UserController

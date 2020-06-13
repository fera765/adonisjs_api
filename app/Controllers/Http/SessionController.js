'use strict'

class SessionController {
  async store ({ request, response, auth }) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )

      return response.json({
        status: 'success',
        data: token
      })
    } catch (err) {
      response.status(401).json({
        status: 'error',
        message: 'Usuario ou senha invalidos'
      })
    }
  }
}

module.exports = SessionController

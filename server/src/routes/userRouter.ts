export {}
const { Router } = require('express')
const UserController = require('../controllers/userController')

function userRouter () {
  const router = Router()
  const user = UserController()

  router.route('/')
    .get(user.getMethod)

  return router
}

module.exports = userRouter

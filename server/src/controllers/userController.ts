export {}
const initializeCloud = require('../utils/firebaseData.ts')

interface UserFunctions {
    getMethod: Function
}

function UserController ():UserFunctions {
  function getMethod (req, res) {
    console.log(req)
    initializeCloud().collection('usuarios').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          res.send(console.log(doc.id, '=>', doc.data()))
        })
      })
      .catch((err) => {
        console.log('Error getting documents', res.send(err))
      })
  }
  return {
    getMethod
  }
}

module.exports = UserController

export {}
const admin = require('../../src/utils/database')
const database = admin.firestore()

interface UserFunctions {
    getMethod: Function
}

function UserController ():UserFunctions {
  function getMethod () {
    database.collection('usuarios').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  }
  return {
    getMethod
  }
}

module.exports = UserController

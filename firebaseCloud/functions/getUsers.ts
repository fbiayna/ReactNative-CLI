const getUsers = require('../utils/firebaseData.ts')

getUsers().collection('usuarios').get()
  .then((snapshot) => {
    snapshot.forEach((document) => {
      console.log(document.id, '=>', document.data())
    })
  })
  .catch(error => {
    console.error('Error', error)
    process.exit()
  })

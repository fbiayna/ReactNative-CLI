const initializeFirebaseCloud = require('../utils/firebaseData.ts')

initializeFirebaseCloud().collection('usuarios').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
    })
  })
  .catch(err => {
    console.error('Error', err)
    process.exit()
  })

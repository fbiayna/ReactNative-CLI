const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const dataBase = admin.firestore()

dataBase.collection('usuarios').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
    })
  })
  .catch(err => {
    console.error('Error', err)
    process.exit()
  })

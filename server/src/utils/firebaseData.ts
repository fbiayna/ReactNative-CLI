const admin = require('firebase-admin')
const serviceAccount = require('../utils/serviceAccountKey.json')

function initializeFirebaseCloud () {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
  const dataBase = admin.firestore()

  return dataBase
}

module.exports = initializeFirebaseCloud

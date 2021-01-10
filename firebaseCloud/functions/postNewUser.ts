const initializeFirebaseCloud = require('../utils/firebaseData.ts')

async function postNewUser () {
  try {
    const newDoc = await initializeFirebaseCloud().collection('usuarios').add({
      name: '51',
      surname: 'Trips',
      email: '51trips@51tripsbrand.com'
    })
    console.log(`Added new document with id: ${newDoc.id}`)
  } catch (error) {
    console.log(error)
  }
}

postNewUser()

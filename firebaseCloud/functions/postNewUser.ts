const postNewUser = require('../utils/firebaseData.ts')

async function AddUser () {
  try {
    const newDoc = await postNewUser().collection('usuarios').add({
      name: '51',
      surname: 'Trips',
      email: '51trips@51tripsbrand.com'
    })
    console.log(`Added new document with id: ${newDoc.id}`)
  } catch (error) {
    console.log(error)
  }
}

AddUser()

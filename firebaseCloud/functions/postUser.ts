const postUser = require('../utils/firebaseData.ts')

async function addUser () {
  try {
    const newDocument = await postUser().collection('usuarios').add({
      name: '51',
      surname: 'Trips',
      email: '51trips@51tripsbrand.com'
    })
    console.log(`Added new document with id: ${newDocument.id}`)
  } catch (error) {
    console.log(error)
  }
}

addUser()

const deleteUser = require('../utils/firebaseData.ts')

async function removeUser () {
  try {
    await deleteUser().collection('usuarios').doc('R936siyTfeuoVBeLN4NT').delete()
    console.log('Removed document with id: R936siyTfeuoVBeLN4NT')
  } catch (error) {
    console.log(error)
  }
}

removeUser()

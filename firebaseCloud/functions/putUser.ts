const putUser = require('../utils/firebaseData.ts')

async function updateUser () {
  try {
    const updateUserId = await putUser().collection('usuarios').doc('uBHyTH0aV0h582LyFe2G')

    updateUserId.set({
      name: 'Fernando'
    }, { merge: true })
    console.log(`Added new document with id: ${updateUserId.id}`)
  } catch (error) {
    console.log(error)
  }
}

updateUser()

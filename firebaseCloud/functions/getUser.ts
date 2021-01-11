const getUser = require('../utils/firebaseData.ts')

const userId = getUser().collection('usuarios').doc('uBHyTH0aV0h582LyFe2G')

userId.get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!')
    } else {
      console.log('Document data:', doc.data())
    }
  })
  .catch(err => {
    console.log('Error getting document', err)
  })

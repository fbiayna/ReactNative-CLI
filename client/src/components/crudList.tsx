/* eslint-disable no-use-before-define */
import React from 'react'
import { Button } from 'react-native'

export default function crudList ({ navigation }:any) {
  return (
    <>
      <Button title='get User Data' onPress={() => navigation.navigate('getUserData')}></Button>
      <Button title='add User Data' onPress={() => navigation.navigate('addUserData')}></Button>
      <Button title='update User Data' onPress={() => navigation.navigate('updateUserData')}></Button>
      <Button title='delete User Data' onPress={() => navigation.navigate('deleteUserData')}></Button>
    </>
  )
}

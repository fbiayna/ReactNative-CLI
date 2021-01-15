/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import crudList from '../crudList'
import getUserData from '../getUserData'
import addUserData from '../addUserData'
import updateUserData from '../updateUserData'
import deleteUserData from '../deleteUser'

const { Navigator, Screen } = createStackNavigator()

export default function crudNavigator ({ navigation }: any) {
  function signOut () {
    auth().signOut()
      .then(() => {
        console.log('User signed out!')
      })
  }
  return (
    <>
        <Navigator initialRouteName='crudList'>
            <Screen name='crudList' component={crudList}/>
            <Screen name='getUserData' component={getUserData}/>
            <Screen name='addUserData' component={addUserData}/>
            <Screen name='updateUserData' component={updateUserData}/>
            <Screen name='deleteUserData' component={deleteUserData}/>
        </Navigator>
        <View>
            <Button title='Sign Out' onPress={() => signOut()}/>
        </View>
    </>
  )
}

/* eslint-disable no-use-before-define */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import crudList from './src/components/crudList'
import getUserData from './src/components/getUserData'
import addUserData from './src/components/addUserData'
import updateUserData from './src/components/updateUserData'
import deleteUserData from './src/components/deleteUser'

const { Navigator, Screen } = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='crudList'>
        <Screen name='crudList' component={crudList}/>
        <Screen name='getUserData' component={getUserData}/>
        <Screen name='addUserData' component={addUserData}/>
        <Screen name='updateUserData' component={updateUserData}/>
        <Screen name='deleteUserData' component={deleteUserData}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default App

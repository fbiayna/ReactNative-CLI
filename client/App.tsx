/* eslint-disable no-use-before-define */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/components/navigators/appNavigator'

function App () {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}

export default App

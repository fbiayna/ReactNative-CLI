/* eslint-disable no-use-before-define */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import splashScreen from '../splashScreen'
import login from '../login'
import crudNavigator from './crudNavigator'

const { Navigator, Screen } = createStackNavigator()

export default function appNavigator () {
  return (
    <Navigator initialRouteName='splashScreen'>
        <Screen name='splashScreen' component={splashScreen}/>
        <Screen name='login' component={login}/>
        <Screen name='crudNavigator' component={crudNavigator}/>
    </Navigator>
  )
}

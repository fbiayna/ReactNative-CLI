/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'

export default function splashScreen ({ navigation }: any) {
  useEffect(() => {
    setTimeout(function () {
      auth().onAuthStateChanged((user: any) => {
        user
          ? navigation.reset({
              index: 0,
              routes: [{ name: 'crudNavigator' }]
            })
          : navigation.reset({
            index: 0,
            routes: [{ name: 'login' }]
          })
      })
    }, 2500)
  }, [])

  return (
    <View style={styles.container}>
        <ActivityIndicator size='large' color='#0000ff'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function login () {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  function createUser (email: any, password: any) {
    auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email address is already in use')
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        } else {
          console.error(error)
        }
      })
  }

  function signUser (email: any, password: any) {
    auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(`Signed in! Welcome ${userCredential.user.email}`)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
      <View>
        <View>
          <Text>Email: </Text>
          <TextInput onChangeText={text => setEmailValue(text)} value={emailValue}/>
        </View>
        <View>
          <Text>Password: </Text>
          <TextInput secureTextEntry={true} onChangeText={text => setPasswordValue(text)} value={passwordValue}/>
        </View>
        <Button title='Create User' onPress={() => createUser(emailValue, passwordValue)}/>
        <Button title='Sign In' onPress={() => signUser(emailValue, passwordValue)}/>
      </View>
  )
}

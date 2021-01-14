/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'

class addUserData extends Component {
    state: any = {
      user: null
    }

    constructor (props: any) {
      super(props)
      this.addUser()
    }

    addUser = async () => {
      try {
        await firestore().collection('usuarios').doc('51Test').set({
          name: '51Test',
          surname: 'TripTest',
          email: 'test@51tripsbrand.com'
        })
          .then(() => {
            console.log('User added!')
            this.setState({
              user: 'User with id 51Test added'
            })
          })
      } catch (error) {
        console.log(error)
        this.setState({
          user: 'User with id 51Test not added...'
        })
      }
    }

    render () {
      return (
            <View>
                <Text>{this.state.user}</Text>
            </View>
      )
    }
}

export default addUserData

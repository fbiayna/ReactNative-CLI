/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'

class deleteUserData extends Component {
    state: any = {
      user: null
    }

    constructor (props: any) {
      super(props)
      this.deleteUser()
    }

    deleteUser = async () => {
      try {
        await firestore().collection('usuarios').doc('51Test').delete()
          .then(() => {
            console.log('User deleted!')
            this.setState({
              user: 'User with id 51Test is deleted'
            })
          })
      } catch (error) {
        console.log('User not deleted...')
        this.setState({
          user: 'Make sure user Id exists! User not deleted...'
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

export default deleteUserData

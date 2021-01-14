/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { TextInput } from 'react-native-gesture-handler'

class updateUserData extends Component {
    state: any = {
      user: null,
      value: null
    }

    user: any

    updateUser = async (newName: any) => {
      try {
        await firestore().collection('usuarios').doc('51Test').set({
          name: newName
        }, { merge: true })
          .then(() => {
            console.log(`userId: 51Test - updated name to: ${newName}`)
            this.setState({
              user: `userId: 51Test - updated name to: ${newName}`
            })
          })
      } catch (error) {
        console.log(error)
        this.setState({
          user: 'User with id 51Test not updated'
        })
      }
    }

    render () {
      return (
            <View>
                <Text>{this.state.user}</Text>
                <TextInput onChangeText={text => this.setState({ value: text })} value={this.state.value}/>
                <Button title='Update user name' onPress={() => this.state.value && this.updateUser(this.state.value)}/>
            </View>
      )
    }
}

export default updateUserData

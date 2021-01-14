/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'

class getUserData extends Component {
    state: any = {
      user: {
        data: {}
      }
    }

    user: any

    constructor (props: any) {
      super(props)
      this.user = firestore().collection('usuarios').doc('51Test')
        .onSnapshot(doc => {
          this.setState({
            user: {
              data: doc.data()
            }
          })
        })
    }

    render () {
      return (
            <View>
              {this.state.user.data?.name
                ? <>
                <Text>Nombre: {this.state.user.data.name}</Text>
                <Text>Apellidos: {this.state.user.data.surname}</Text>
                <Text>Email: {this.state.user.data.email}</Text>
              </>
                : <Text>userId: 51Test - doesn't exist!</Text>}
            </View>
      )
    }
}

export default getUserData

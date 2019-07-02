import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native'

class MoreSub extends React.Component {

  signOut = async() => {
    try{
      await AsyncStorage.clear()

      this.props.navigation.navigate('AuthLoading')
    } catch(error) {
      console.log('Error happens in clearing data from AsyncStorage ', error);
    }
  }

  render() {
    return (
      <View>
        <Text>
          Hello from MoreSub
        </Text>
        <Button title="Sign Out" onPress={this.signOut} />
      </View>
    )
  }
}

export default MoreSub

import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


class SignUp extends React.Component {

  static navigationOptions = {
    title: "Please Sign Up"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
      </View>
    )
  }
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

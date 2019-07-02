import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native'


class SignIn extends React.Component {

  static navigationOptions = {
    title: "Please Sign In"
  }

  signIn = async() => {

    const newObj = { name: 'HaeIn', isBeginner: true };

    await AsyncStorage.setItem("userToken", JSON.stringify(newObj))

    this.props.navigation.navigate("AuthLoading")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Button title="SignIn - Complete" onPress={this.signIn} />
      </View>
    )
  }
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

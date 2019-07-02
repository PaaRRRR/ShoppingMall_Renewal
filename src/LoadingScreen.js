import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'


class LoadingScreen extends React.Component {

  constructor() {
    super()

    this.loadApp()
  }

  loadApp = async() => {

      let userToken = await AsyncStorage.getItem("userToken")
      userToken = JSON.parse(userToken);

      if(userToken) {

        if(userToken.isBeginner) {
          this.props.navigation.navigate("Onboarding")
        } else {
          this.props.navigation.navigate("App")
        }

      } else {
        this.props.navigation.navigate("Auth")
      }

  }


  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

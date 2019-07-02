import React from 'react'
import {
  View,
  StyleSheet,
  Button
} from 'react-native'

import BaseDefaultScreen from '../Components/BaseDefaultScreen'

const More = ({ navigation }) => (
  <View style={styles.flexone}>

    <BaseDefaultScreen
      mainpara={'Introducing Plus: More'}
      subpara={'A new selection of homes verified for quality & comfort'}
      img={require("../../imgs/tony-ross-390652-unsplash.jpg")}
    />

    <View style={styles.buttonmargin}>
      <Button title="Go to Detail" onPress={()=> navigation.navigate("Sub")} />
    </View>
  </View>
)


export default More

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  buttonmargin: {
    marginVertical: 20
  }
})

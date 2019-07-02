import React from 'react'
import {
  View,
  StyleSheet,
  Button
} from 'react-native'

import BaseDefaultScreen from '../Components/BaseDefaultScreen'

const MallSub = ({ navigation }) => {

  const { params } = navigation.state

  return (
    <View style={styles.flexone}>

      <BaseDefaultScreen
        mainpara={`${params.shoppingMall} - Introducing Plus: Cozy healthy day! Join`}
        subpara={params.tags}
        img={params.logo}
      />

      <View style={styles.buttonmargin}>
        <Button title="Go Back" onPress={()=> navigation.goBack()} />
      </View>
    </View>
  )
}

export default MallSub

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  buttonmargin: {
    marginVertical: 20
  }
})

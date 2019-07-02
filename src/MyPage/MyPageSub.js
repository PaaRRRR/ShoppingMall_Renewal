import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import BaseDefaultScreen from '../Components/BaseDefaultScreen'

const MyPageSub = () => (
  <View style={styles.flexone}>
    <BaseDefaultScreen
      mainpara={'결제해주셔서 감사합니다.'}
      subpara={'Your payment has been processed securely. Thank you!'}
      img={require("../../imgs/ezequiel-garrido-1491360-unsplash.jpg")}
    />
  </View>
)


export default MyPageSub

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  }
})

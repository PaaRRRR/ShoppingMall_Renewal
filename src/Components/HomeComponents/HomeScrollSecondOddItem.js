import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import HomeScrollSecondItemUnit from './HomeScrollSecondItemUnit'

const HomeScrollSecondOddItem = ({ firstItem, name, onPress }) => (
  <View style={styles.container}>

    <HomeScrollSecondItemUnit
      title={firstItem.shoppingMall}
      name={firstItem.name}
      price={firstItem.price}
      imageUri={firstItem.img}
      store={firstItem.like}
      onPress={()=> onPress(name, firstItem.name)}
    />

  </View>
)


export default HomeScrollSecondOddItem;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', height: 100, marginVertical: 20, marginLeft: 20, marginRight: 10,
    alignItems: 'center', borderRadius: 5, shadowRadius: 5,
    shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.8, elevation: 5
  }
})

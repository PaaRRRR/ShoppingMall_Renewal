import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import HomeScrollSecondItemUnit from './HomeScrollSecondItemUnit'

const HomeScrollSecondEvenItem = ({ firstItem, secondItem, name, onPress }) => (
  <View style={styles.container}>
      <HomeScrollSecondItemUnit
        title={firstItem.shoppingMall}
        name={firstItem.name}
        price={firstItem.price}
        imageUri={firstItem.img}
        store={firstItem.like}
        style={styles.borderbottomstyle}
        onPress={()=> onPress(name, firstItem.name)}
      />
      <HomeScrollSecondItemUnit
        title={secondItem.shoppingMall}
        name={secondItem.name}
        price={secondItem.price}
        imageUri={secondItem.img}
        store={secondItem.like}
        onPress={()=> onPress(name, secondItem.name)}
      />
  </View>
)


export default HomeScrollSecondEvenItem;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', marginVertical: 20, marginLeft: 20, marginRight: 10,
    alignItems: 'center', borderRadius: 5, shadowRadius: 5,
    shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.8, elevation: 5
  },
  borderbottomstyle: {
    borderBottomWidth: 0.5, borderBottomColor: 'grey'
  }
})

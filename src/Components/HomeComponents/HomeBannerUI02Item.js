import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import { reshapePrice } from '../../utils/dataTransformation'

const HomeBannerUI02Item = ({logo, price, title}) => (
  <View style={styles.contentbox}>
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.image}
      />
    </View>
    <View style={styles.descbox}>
      <Text style={styles.tinytext}>cardigan</Text>
      <Text style={styles.midredtext}>{title}</Text>
      <Text style={styles.midboldtext}>{reshapePrice(price)}</Text>
    </View>
  </View>
)

export default HomeBannerUI02Item;

const styles = StyleSheet.create({
  contentbox: {
    flex:1,
    width: 150,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    opacity: 0.9, marginHorizontal: 10, borderRadius: 5
  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  image: {
    width: 50, height: 50, borderRadius: 50, resizeMode: 'cover'
  },
  descbox: {
    flex: 1, justifyContent: 'space-between', paddingLeft: 5
  },
  tinytext: {
    fontSize: 9, color: '#999'
  },
  midredtext: {
    fontSize: 12, color: 'red'
  },
  midboldtext: {
    fontSize: 12, fontWeight: 'bold'
  }
})

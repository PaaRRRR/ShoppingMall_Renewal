import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'


import { reshapePrice } from '../../utils/dataTransformation'

const HomeBannerUI03Item = ({ logo, price, title }) => (
  <View style={styles.container}>
    <ImageBackground
      source={logo}
      style={styles.backimage}
    >

    <View style={styles.contentbox}>
      <Text style={[styles.contentboxitem, styles.centerflex]}>Acc</Text>
      <View style={[styles.flexfour, styles.centerflex]}>
        <Image
          source={logo}
          style={styles.image}
        />
      </View>
      <View style={styles.descbox}>
        <Text style={styles.descboxte}>{title}</Text>
        <Text style={styles.descboxxt}>{reshapePrice(price)}</Text>
      </View>
    </View>

    </ImageBackground>
  </View>
)

export default HomeBannerUI03Item;

const styles = StyleSheet.create({
  container: {
    flex:1, width: 270, flexDirection: 'row', marginHorizontal: 10, borderRadius: 10, overflow: 'hidden'
  },
  backimage: {
    flex: 1, height: '100%', width: '100%', resizeMode: 'cover', justifyContent: 'flex-end'
  },
  flexfour: {
    flex: 4
  },
  contentbox: {
    width: 100,
    height: 130,
    backgroundColor: 'black',
    opacity: 0.8,
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 5
  },
  contentboxitem: {
    flex: 1, fontSize: 9, color: '#9e9e9e'
  },
  image: {
    width: 50, height: 50, borderRadius: 50, resizeMode: 'cover'
  },
  centerflex: {
    justifyContent: 'center', alignItems: 'center'
  },
  descbox: {
    flex: 2, justifyContent: 'space-between', alignItems: 'center'
  },
  descboxte: {
    fontSize: 12, color: 'white'
  },
  descboxxt: {
    fontSize: 12, color: 'red'
  }
})

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import { reshapePrice } from '../utils/dataTransformation'

const ListItem4HomeDetailProduct = ({ img, name, price}) => (
  <View style={styles.container}>
    <View style={styles.imagebox}>
      <Image
        source={ img }
        style={styles.image}
      />
    </View>
    <View style={styles.contentbox}>
      <Text style={styles.contentboxte}>{ name }</Text>
      <Text style={styles.contentboxxt}>{ reshapePrice(price) }</Text>
    </View>
  </View>
)


export default ListItem4HomeDetailProduct

const styles = StyleSheet.create({
  container: {
    height: 160, width: 120, margin: 5, borderRadius: 2, borderWidth: 0.5, borderColor: "#ddd"
  },
  imagebox: {
    flex: 2
  },
  image: {
    flex: 1, width: null, height: null, resizeMode: 'cover'
  },
  contentbox: {
    flex: 1, alignItems: 'center'
  },
  contentboxte: {
    fontSize: 12, textAlign: 'center'
  },
  contentboxxt: {
    fontSize: 12, fontWeight: 'bold'
  }

})

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { reshapePrice } from '../../utils/dataTransformation'

const HomeScrollItem = ({ AllProps, onPress }) => {

  let tags = "";
  AllProps.tags.forEach(cur => {
    tags += " #" + cur
  })

  return (
    <View style={styles.container}>
      <View style={styles.flextwo}>
        <ImageBackground
          source={AllProps.img}
          style={styles.backimage}
        >
          <View style={styles.btntouch}>
            <TouchableOpacity onPress={onPress}>
              {AllProps.like ? <Icon name="md-heart" color="red" size={24} /> : <Icon name="md-heart-empty" size={24} />}
            </TouchableOpacity>
          </View>
          <View style={styles.tagbox}>
            <Text style={styles.tagtext}>{ tags }</Text>
          </View>
        </ImageBackground>

      </View>
      <View style={styles.descbox}>
        <Text style={styles.descboxte}>{AllProps.name}</Text>
        <Text style={styles.descboxxt}>{reshapePrice(AllProps.price)}</Text>
      </View>
    </View>
  )
}

export default HomeScrollItem;


const styles = StyleSheet.create({
  container: {
    height: 160, width: 120, borderRadius: 5, margin: 10
  },
  flextwo: {
    flex: 2
  },
  backimage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'space-between'
  },
  btntouch: {
    flex: 1, padding: 5
  },
  tagbox: {
    flex: 1, justifyContent: 'flex-end', padding: 5
  },
  tagtext: {
    color: 'white', fontSize: 9
  },
  descbox: {
    flex: 1, paddingTop: 10, alignItems: 'center'
  },
  descboxte: {
    fontSize: 12
  },
  descboxxt: {
    fontSize: 12, fontWeight: 'bold'
  }
})

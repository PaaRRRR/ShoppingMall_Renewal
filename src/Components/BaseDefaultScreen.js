import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')

const BaseDefaultScreen = ({ mainpara, subpara, img }) => (
  <View style={styles.contentbox}>
    <Text style={styles.mainpara}>
      {mainpara}
    </Text>
    <Text style={styles.subpara}>
      {subpara}
    </Text>
    <View style={styles.imagebox}>
      <Image
        source={img}
        style={styles.image}
      />
    </View>
  </View>
)

export default BaseDefaultScreen;


const styles = StyleSheet.create({
  contentbox: {
    marginTop: 40, paddingHorizontal: 20
  },
  mainpara: {
    fontSize: 24, fontWeight: '700'
  },
  subpara: {
    fontWeight: '100',
    marginTop: 10
  },
  imagebox: {
    width:width-40,
    height:200,
    marginTop: 20
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius:5,
    borderWidth: 1,
    borderColor:"#ddd"
  }
})

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { reshapePrice } from '../../utils/dataTransformation'

const HomeScrollSecondItemUnit = ({title, name, price, store, imageUri, style, onPress}) => (
  <View style={[style, styles.container]}>
    <View style={styles.firstcontent}>
      <View style={styles.imagebox}>
        <Image
          source={imageUri}
          style={styles.image}
        />
      </View>
    </View>
    <View style={styles.secondcontent}>
      <Text style={styles.bigtext}>{title}</Text>
      <Text style={styles.smalltext}>{name}</Text>
      <Text style={styles.smallboldtext}>{reshapePrice(price)}</Text>
    </View>
    <View style={styles.firstcontent}>
      <TouchableOpacity onPress={onPress}>
        {store ? <Icon name="md-heart" color="red" size={24} /> : <Icon name="md-heart-empty" size={24} />}
      </TouchableOpacity>
    </View>
  </View>
)


export default HomeScrollSecondItemUnit;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', flex: 1, width: 280
  },
  imagebox: {
    width: 70, height: 70, borderRadius: 5
  },
  image: {
    flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 5
  },
  firstcontent: {
    flex: 2, justifyContent: 'center', alignItems: 'center'
  },
  secondcontent: {
    flex: 2, justifyContent: 'center'
  },
  bigtext: {
    fontSize: 16, fontWeight: 'bold', marginVertical: 5
  },
  smalltext: {
    fontSize: 12
  },
  smallboldtext: {
    fontSize: 12, fontWeight: 'bold'
  }
})

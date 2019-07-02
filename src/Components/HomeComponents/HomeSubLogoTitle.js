import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { reshapePrice } from '../../utils/dataTransformation'

const platformbackicon = Platform.OS === 'android' ? 'md-arrow-back' : 'ios-arrow-round-back';

const HomeSubLogoTitle = ({ onPress, datas }) => (
  <View style={styles.container}>
    <View style={styles.btntouch}>
        <TouchableOpacity onPress={onPress}>
          <Icon name={platformbackicon} size={24} style={styles.btntouchicon} />
        </TouchableOpacity>
        <Text style={styles.btntouchtext}>{datas.name}</Text>
    </View>

    <View style={styles.contentbox}>
      <View style={styles.flexone}>
        <Image
          source={datas.firstItem[0].img}
          style={styles.image}
        />
      </View>

      <View style={styles.textcontent}>
        <Text style={styles.redtext}>선택한 상품</Text>
        <Text style={styles.smalltext}>{datas.firstItem[0].name}</Text>
        <Text style={styles.midboldtext}>{reshapePrice(datas.firstItem[0].price)}</Text>
      </View>
    </View>
  </View>
)

export default HomeSubLogoTitle

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  container: {
    flex:1, height: 200
  },
  contentbox: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20 ,
    borderRadius: 5, backgroundColor: '#eee'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderTopLeftRadius: 5, borderBottomLeftRadius: 5
  },
  textcontent: {
    flex: 2, justifyContent: 'center', marginLeft: 10
  },
  redtext: {
    fontSize: 12, fontWeight: 'bold', marginVertical: 5, color: 'red'
  },
  btntouch: {
    height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10
  },
  btntouchtext: {
    fontSize: 16, color: 'black'
  },
  btntouchicon: {
    marginHorizontal: 10, color: 'black'
  },
  smalltext: {
    fontSize: 14
  },
  midboldtext: {
    fontSize: 16, fontWeight: 'bold'
  }
})

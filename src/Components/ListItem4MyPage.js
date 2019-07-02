import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

import { reshapePrice } from '../utils/dataTransformation';
import Icon from 'react-native-vector-icons/Ionicons'

const ListItem4MyPage = ({ title, name, price, tags, imageUri, isFlipped, count, style, onRemove, onToggle }) => {
  let tagStr = "";
  tags.forEach(cur => {
    tagStr += " #" + cur
  })
  return (
    <View style={[styles.shadowboxstyle, style]}>

        <View style={styles.container}>
          <View style={styles.firstcontent}>
            <View style={styles.imagebox}>
              <Image
                source={imageUri}
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.secondcontent}>
            <Text style={styles.secondcontenttext01}>{title}</Text>
            <Text style={styles.secondcontenttext02}>{name}</Text>
            <Text style={styles.secondcontenttext03}>{reshapePrice(price)}</Text>
          </View>

          <View style={styles.thirdcontentbox}>
            <TouchableOpacity onPress={onToggle}>
              {isFlipped ? <Icon name="md-arrow-dropup" size={24} /> : <Icon name="md-arrow-dropdown" size={24} />}
            </TouchableOpacity>
          </View>
        </View>
        {isFlipped ? (
          <View style={styles.flippedbox}>
            <Text style={styles.flippedboxtag}>{tagStr}</Text>
            <View style={styles.flippedboxsep} />
            <View style={styles.btntouch}>
              <TouchableOpacity onPress={onRemove}>
                <Icon name="md-trash" size={24} />
              </TouchableOpacity>
              <Text style={styles.btntouchtext}>Add</Text>
            </View>

          </View>

        ) : null}


    </View>
  )
}

export default ListItem4MyPage

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
  },
  firstcontent: {
    flex: 2, justifyContent: 'center', alignItems: 'center'
  },
  secondcontent: {
    flex: 2, justifyContent: 'center'
  },
  secondcontenttext01: {
    fontSize: 16, fontWeight: 'bold', marginVertical: 5
  },
  secondcontenttext02: {
    fontSize: 12
  },
  secondcontenttext03: {
    fontSize: 12, fontWeight: 'bold'
  },
  thirdcontentbox: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  shadowboxstyle: {
    backgroundColor: 'white', margin: 10, flex: 1, width: 320, paddingVertical: 20,
    alignItems: 'center', justifyContent: 'center', borderRadius: 5, shadowRadius: 5,
    shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.8, elevation: 5
  },
  image: {
    flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 5
  },
  imagebox: {
    width: 70, height: 70, borderRadius: 5
  },
  flippedbox: {
    flex: 1, width: 300, paddingHorizontal: 20
  },
  flippedboxtag: {
    fontSize: 16, fontWeight: 'bold', marginTop: 15
  },
  flippedboxsep: {
    height: 1, backgroundColor: '#CED0CE', marginVertical: 10
  },
  btntouch: {
    flex:1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'
  },
  btntouchtext: {
    fontSize: 16, fontWeight: 'bold'
  }
})

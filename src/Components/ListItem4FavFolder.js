import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'


const ListItem4FavFolder = ({logo, allProps, onPress, onLongPress}) => (

<TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
  <View style={styles.container}>

    <View style={styles.imagebox}>
      <Image
        source={logo}
        style={styles.image}
      />
    </View>
    <View style={styles.contentbox}>
      <Text style={styles.contentboxte}> #{allProps.name} </Text>
      <Text style={styles.contentboxxt}> {allProps.date} </Text>
    </View>
    </View>
  </TouchableOpacity>
)

export default ListItem4FavFolder

const styles = StyleSheet.create({
  container: {
    height: 200, width: 150, margin: 10
  },
  imagebox: {
    flex: 3, borderRadius: 2
  },
  image: {
    flex: 1, width: null, height: null, resizeMode: 'cover'
  },
  contentbox: {
    flex: 1, justifyContent: 'space-around'
  },
  contentboxte: {
    fontSize: 15, color: 'red'
  },
  contentboxxt: {
    fontSize: 13, fontWeight: 'bold'
  }
})

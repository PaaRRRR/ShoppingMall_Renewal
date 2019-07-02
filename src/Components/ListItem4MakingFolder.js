import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const ListItem4MakingFolder = ({ description, logo, favorites, shoppingMall, onPress }) => {
  let tags = "";
  description.forEach(cur => {
    tags += " #" + cur
  })

  return (
    <View style={styles.container}>
      <View style={styles.logoView }>
        <Image source={logo} style={[styles.logo, (favorites ? styles.selectedstyle : {} ) ]  }/>
      </View>
      <View style={ styles.textView }>
        <Text style={ styles.title }>{shoppingMall}</Text>

        <Text style={ styles.description }>{tags}</Text>
      </View>
      <View style={styles.btntouch}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="ios-checkmark-circle-outline" color={favorites ? 'red' : 'grey'} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default ListItem4MakingFolder;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 30
  },
  rankingView: {
    marginHorizontal: 5,
    width: 40,
    alignItems: 'center'
  },
  rankingText: {
    fontSize: 16,
    color: 'grey'
  },
  logoView: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  logo: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 50,
    resizeMode: 'cover'
  },
  textView: {
    marginHorizontal: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
    color: 'grey'
  },
  btntouch: {
    position: 'absolute', right: 20
  },
  selectedstyle: {
    borderWidth:2, borderColor: 'red'
  }

})

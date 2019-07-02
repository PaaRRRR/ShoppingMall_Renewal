import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import RoundTagsText from './RoundTagsText'

const ListItem4Favorite = ({ gotoDetail, logo, shoppingMall, newArrivals, description }) => (
  <TouchableOpacity onPress={(gotoDetail)}>
    <View style={styles.container}>
      <View style={ styles.logoView }>
        <Image source={logo} style={ styles.logo }/>
      </View>
      <View style={ styles.textView }>
        <View style={styles.flexrowstyle}>
          <Text style={ styles.title  }>{shoppingMall}</Text>
          {newArrivals > 0 ? (<View style={styles.newarrivalst}>
            <Text style={styles.newarrivaltext}>{"+" + newArrivals}</Text>
          </View>) : null }
        </View>
        <Text style={ styles.description }>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
)



export default ListItem4Favorite;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomWidth: 1, borderBottomColor: '#CED0CE'
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
  flexrowstyle: {
    flexDirection: 'row'
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
  newarrivalst: {
    paddingHorizontal: 8,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: 'red', justifyContent: 'center'
  },
  newarrivaltext: {
    color: 'white', fontSize: 10
  }

})

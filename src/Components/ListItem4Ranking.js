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

const ListItem4Ranking = ({ gotoDetail, ranking, logo, newArrivals, shoppingMall, description, toggleFav, favorites }) => (
  <View style={ styles.container }>

    <TouchableOpacity onPress={gotoDetail}>
      <View style={styles.contentbox}>
        <View style={ styles.rankingView }>
          <Text style={ styles.rankingText }>{ranking}</Text>
        </View>
        <View style={ styles.logoView }>
          <Image source={logo} style={ styles.logo }/>
        </View>
        <View style={ styles.textView }>
          <View style={{ flexDirection: 'row' }}>
            <Text style={ styles.title  }>{shoppingMall}</Text>
            {newArrivals > 0 ? (<View style={styles.newarrivalst}>
              <Text style={styles.newarrivaltext}>{"+" + newArrivals}</Text>
            </View>) : null }
          </View>
          <Text style={ styles.description }>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>


    <View style={styles.btntouch}>
      <TouchableOpacity onPress={toggleFav}>
        <Icon name="md-star" color={favorites ? 'red' : 'grey'} size={24} />
      </TouchableOpacity>
    </View>
  </View>
)

export default ListItem4Ranking;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center'
  },
  contentbox: {
    flex: 1, flexDirection: 'row', alignItems: 'center'
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
  newarrivalst: {
    paddingHorizontal: 8, marginLeft: 10, borderRadius: 10, backgroundColor: 'red', justifyContent: 'center'
  },
  newarrivaltext: {
    color: 'white', fontSize: 10
  },
  btntouch: {
    position: 'absolute', right: 20
  }

})

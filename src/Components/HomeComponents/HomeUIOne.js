import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native'

import HomeTitle from './HomeTitle';
import HomeScrollItem from './HomeScrollItem';

const HomeUIOne = ({ items, gotoSub, toggleLikes }) => (
  <View style={styles.container}>
    <HomeTitle words={items.words} onPress={()=> gotoSub("Sub", { name: items.name, data: items.data })}/>

    <View style={styles.scrollstyle}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

      { items.data.map(cur => <HomeScrollItem key={cur.name} AllProps={cur} onPress={()=> toggleLikes(items.name, cur.name)} />) }

      </ScrollView>
    </View>
  </View>
)

export default HomeUIOne;


const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: 20
  },
  scrollstyle: {
    height: 160, marginTop: 10, marginLeft: 10
  }
})

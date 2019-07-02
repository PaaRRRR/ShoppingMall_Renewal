import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

import HomeBannerUI03Item from './HomeBannerUI03Item'


const HomeBannerUI03 = ({ data }) => (
  <View style={styles.container}>
  <View style={styles.contentbox}>
    <View style={styles.marginLeftstyle}>
      <Text style={[styles.redtext, styles.tinymarginbottom]}>#</Text>
      <Text style={[styles.whitetext, styles.tinymarginbottom]}>[올리비아 Ops..]</Text>
      <Text style={[styles.whitetext, styles.tinymarginbottom]}>이렇게 코디해보세요!</Text>
      <Text style={[styles.midtext, styles.tinymarginbottom]}>최근 구매하신 제품 연관 추천</Text>
    </View>
  </View>

  <View style={styles.scrollbox}>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >

      { data.map((cur, index) => <HomeBannerUI03Item key={index} logo={cur.img} title={cur.shoppingMall} price={cur.price} />) }

    </ScrollView>
  </View>

  </View>
)

export default HomeBannerUI03;

const styles = StyleSheet.create({
  container: {
    flex: 1, height: 420
  },
  contentbox: {
    height: 270, backgroundColor: 'black', paddingTop: 25
  },
  marginLeftstyle: {
    marginLeft: 20
  },
  redtext: {
    fontSize: 24, color: 'red'
  },
  whitetext: {
    fontSize: 20, color: 'white'
  },
  midtext: {
    fontSize: 12, color: '#9e9e9e'
  },
  scrollbox: {
    height: 270, width: '100%', position: 'absolute', top: 150, left: 10, paddingVertical: 5
  },
  tinymarginbottom: {
    marginBottom: 5
  }
})

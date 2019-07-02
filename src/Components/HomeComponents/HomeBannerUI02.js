import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from 'react-native'

import HomeBannerUI02Item from './HomeBannerUI02Item'

const HomeBannerUI02 = ({ data }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../../../imgs/reinaldo-kevin-623146-unsplash.jpg")}
      style={styles.backgroundimage}
    >
      <View style={styles.contentbox}>
        <View style={styles.redbox}>
          <Text style={styles.middleletter}>FOR YOU</Text>
        </View>
        <Text style={[styles.bigletter, styles.tinymarginbottom]}>[올리비아 Ops..]</Text>
        <Text style={[styles.bigletter, styles.midmarginbottom]}>이렇게 코디해보세요!</Text>

        <View style={styles.bottomscroll}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >

          { data.map((cur, index) => <HomeBannerUI02Item key={index} logo={cur.img} title={cur.shoppingMall} price={cur.price} />) }

          </ScrollView>
        </View>

      </View>

    </ImageBackground>
  </View>

)

export default HomeBannerUI02;

const styles = StyleSheet.create({
  container: {
    flex: 1, height: 300
  },
  backgroundimage: {
    flex: 1, height: '100%', width: '100%', resizeMode: 'cover'
  },
  contentbox: {
    flex: 1, marginLeft: 20, justifyContent: 'flex-end'
  },
  redbox: {
    backgroundColor: 'red', marginBottom: 10, width: 70, padding: 5, alignItems: 'center'
  },
  middleletter: {
    fontSize: 9, color: 'white'
  },
  bigletter: {
    fontSize: 16, color: 'white'
  },
  bottomscroll: {
    height: 70, marginBottom: 15
  },
  tinymarginbottom: {
    marginBottom: 5
  },
  midmarginbottom: {
    marginBottom: 15
  }

})

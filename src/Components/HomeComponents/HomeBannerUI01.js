import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

const HomeBannerUI01 = () => (

    <View style={styles.container}>
      <ImageBackground
        source={require("../../../imgs/matt-seymour-313060-unsplash.jpg")}
        style={styles.backgroundimage}
      >
        <View style={styles.contentbox}>
          <View style={styles.redbox}>
            <Text style={styles.middleletter}>FOR YOU</Text>
          </View>
          <Text style={styles.bigletter}>최근 찜한 올리비아 이렇게 코디해보세요!</Text>
        </View>
      </ImageBackground>
    </View>
)


export default HomeBannerUI01;


const styles = StyleSheet.create({
  container: {
    flex: 1, height:200
  },
  backgroundimage: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  contentbox: {
    margin: 20
  },
  redbox: {
    backgroundColor: 'red',
    marginBottom: 10,
    width: 70,
    padding: 5,
    alignItems: 'center'
  },
  middleletter: {
    fontSize: 9, color: 'white'
  },
  bigletter: {
    fontSize: 16, color: 'white'
  }
})

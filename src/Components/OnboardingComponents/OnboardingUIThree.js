import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import RoundTagsText from '../RoundTagsText';

const { width, height } = Dimensions.get('window');

const OnboardingUIThree = ({ tags, onKeySelector, skip }) => (
  <View style={styles.panel}>
    <View style={styles.contentbox}>
      <Text style={styles.contentboxtext}>관심있는 키워드를 선택하세요.</Text>
    </View>

    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={styles.wrapcontent}>
          {tags.map((item, index) => (
            <RoundTagsText name={item.name} isSelected={item.isSelected} key={index} onPress={()=>onKeySelector(item.name)}/>
          ))}
        </View>
      </ScrollView>
    </View>

    <View style={styles.btntouch}>
      <TouchableOpacity onPress={skip}>
        <Text>건너뛰기</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default OnboardingUIThree

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    overflow: 'hidden',
    marginTop: 50
  },
  container: {
    flex:1, justifyContent: 'center', alignItems: 'center'
  },
  wrapcontent: {
    flex: 1,
    width: width + 270,
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  contentbox: {
    marginBottom: 60, width: 240, paddingLeft: 40
  },
  contentboxtext: {
    fontSize: 26, color: '#f61b65'
  },
  btntouch: {
    flex:0.5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 10, paddingTop: 20
  }
})

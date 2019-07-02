import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import BoldText from '../BoldText'

const HomeTitle = ({ words, onPress }) => (
  <View style={styles.container}>
    <Text>
      { words.leftStr } <BoldText>{ words.keyStr }</BoldText> { words.rightStr }
    </Text>
    <TouchableOpacity style={styles.btntouch} onPress={onPress}>
      <Text style={styles.textstyle}>
        전체보기
      </Text>
    </TouchableOpacity>
  </View>
) 

export default HomeTitle;


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20, marginVertical: 5
  },
  btntouch: {
    alignItems: 'center', position: 'absolute', right: 20
  },
  textstyle: {
    color: '#ddd', fontSize: 12
  }
})

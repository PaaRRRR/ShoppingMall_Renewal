import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native'

const OnboardingUIOne = ({ textInputValue, textInputFnc }) => (
  <View style={styles.panel}>
    <View style={styles.container}>
      <View style={styles.contentbox}>
        <Text style={styles.contentboxte}>지그재그에 오신 것을 환영합니다!</Text>
        <Text style={styles.contentboxxt}>스타일에 꼭 맞춘 추천을 위해 몇 가지 질문을 드릴게요. </Text>
      </View>
      <Text style={styles.textstyle}>나이(출생년도)</Text>
      <TextInput
        value={textInputValue}
        onChangeText={ textValue => {textInputFnc(textValue)}}
        placeholderTextColor='#f61b65' placeholder="25세 (1995년)"
        style={styles.textinputstyle}
      />
    </View>
  </View>
)

export default OnboardingUIOne

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    overflow: 'hidden',
    marginTop: 50
  },
  container: {
    flex: 1, paddingLeft: 40
  },
  contentbox: {
    marginBottom: 70, width: 250
  },
  contentboxte: {
    fontSize: 28, marginBottom: 17, color: '#f61b65'
  },
  contentboxxt: {
    fontSize: 16, color: '#898989'
  },
  textstyle: {
    fontSize: 14, marginBottom: 17, color: '#363636'
  },
  textinputstyle: {
    fontSize: 22, width: 300,
    marginBottom: 10, color: '#f61b65',
    borderBottomWidth: 1, borderBottomColor: '#d8d8d8'
  }
}
)

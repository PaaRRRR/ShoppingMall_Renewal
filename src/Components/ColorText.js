import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

const ColorText = ({ style, children, wantedColor }) => (
  <Text style={[style, { color: wantedColor }]}>{ children }</Text>
)

export default ColorText;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

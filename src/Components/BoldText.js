import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

const BoldText = ({ style, children }) => (
  <Text style={[styles.boldText, style]}>{ children }</Text>
)

export default BoldText;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  }
})

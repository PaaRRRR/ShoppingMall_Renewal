import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const BottomFullButton = ({ onPress, children, ...rest }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <Text style={styles.childtext}>
      {children}
    </Text>
  </TouchableOpacity>
)


export default BottomFullButton

const styles = StyleSheet.create({
  childtext: {
    color: "#fff",
    fontSize: 28
  }
})

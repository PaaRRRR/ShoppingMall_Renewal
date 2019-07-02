import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const RoundTagsText = ({ style, isSelected = false, name, onPress = ()=>{} }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.container, (isSelected ? styles.selectbackcolor : styles.unselectbackcolor), style]}>
      <Text style={(isSelected ? styles.whitecolor : styles.unselectcolor)}>{name}</Text>
    </View>
  </TouchableOpacity>
)

export default RoundTagsText;


const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 9,
    height: 45
  },
  whitecolor: {
    color: '#fff'
  },
  unselectcolor: {
    color: '#f61b65'
  },
  selectbackcolor: {
    backgroundColor: '#f61b65'
  },
  unselectbackcolor: {
    backgroundColor: '#f6f6f6'
  }
})

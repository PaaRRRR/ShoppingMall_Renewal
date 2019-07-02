import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class MyPageNoItems extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>No items in your cart</Text>
      </View>
    )
  }
}

export default MyPageNoItems;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

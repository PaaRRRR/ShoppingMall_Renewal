import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SearchSub = () => (
  <View style={styles.container}>
    <Text>
      Hello from SearchSub
    </Text>
  </View>
)

export default SearchSub

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

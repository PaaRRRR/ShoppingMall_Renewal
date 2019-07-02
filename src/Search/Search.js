import React from 'react'
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import BaseDefaultScreen from '../Components/BaseDefaultScreen'

class Search extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity style={{paddingRight: 10}} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={()=> navigation.navigate("ProductSearch")} >
        <Icon name="md-search" size={28} />
      </TouchableOpacity>
    )
  })

  render() {

    return (
      <View style={styles.flexone}>
        <BaseDefaultScreen
          mainpara={'Introducing Plus: Search'}
          subpara={'A new selection of homes verified for quality & comfort'}
          img={require("../../imgs/artem-maltsev-1372856-unsplash.jpg")}
        />
        <View style={styles.buttonmargin}>
          <Button title="Go to Detail" onPress={()=> this.props.navigation.navigate("Sub")} />
        </View>
      </View>
    )
  }
}

export default Search

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  buttonmargin: {
    marginVertical: 20
  }
})

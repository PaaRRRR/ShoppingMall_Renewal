import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import {makingTagsString} from '../utils/dataTransformation'
import BaseDefaultScreen from '../Components/BaseDefaultScreen'

class ProductSearchSub extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.data.shoppingMall
  })

  render() {

    const {shoppingMall, tags, logo} = this.props.navigation.state.params.data;

    let tagStr = makingTagsString(tags);

    return (
      <View style={styles.flexone}>
        <BaseDefaultScreen
          mainpara={`${shoppingMall} - Introducing Plus: Cozy healthy day! Join`}
          subpara={tagStr}
          img={logo}
        />
      </View>
    )
  }
}

export default ProductSearchSub


const styles = StyleSheet.create({
  flexone: {
    flex: 1
  }
})

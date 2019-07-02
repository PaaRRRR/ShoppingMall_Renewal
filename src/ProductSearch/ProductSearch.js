import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/Ionicons'
import ProductSearchHeaderTitle from '../Components/ProductSearchHeaderTitle'

const {width, height} = Dimensions.get('window');

class ProductSearch extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <ProductSearchHeaderTitle
        onChangeText={navigation.getParam("onChangeText")}
        onClear= {navigation.getParam("onClear")}
      />
    )
  })

  componentDidMount() {
    this.props.navigation.setParams({
      onChangeText: this.onTextChanged,
      onClear: this.onClear
    })
  }

  state={
    suggestions: [],
    text: ''
  }

  onTextChanged = (text) => {

    let suggestions = [];
    if(text.length > 0) {
      const regex = new RegExp(`^${text}`, 'i');
      suggestions = this.props.malls.filter(v => regex.test(v.shoppingMall));
    }
    this.setState({suggestions, text});
  }

  onClear = () => {
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.flexone}>

        {this.state.text !== '' ? (
          <View style={styles.flexone}>
            {this.state.suggestions.map((item, index) => (
                <View key={index} style={styles.list}>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate("ProductSearchSub", { data: item })}>
                    <Text>{item.shoppingMall}</Text>
                  </TouchableOpacity>
                </View>
            ))}
          </View>
        ) : (
          <View style={styles.container}>
            <Text>쇼핑몰들을 검색해 보세요!</Text>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  malls: state.shoppingData.malls
})


export default connect(mapStateToProps)(ProductSearch)

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  list: {
    width: width,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e7e7e7'
  },
  flexone: {
    flex: 1
  }
})

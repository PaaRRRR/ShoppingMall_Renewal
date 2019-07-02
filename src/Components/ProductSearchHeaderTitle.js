import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window');

class ProductSearchHeaderTitle extends React.Component {

  state= {
    text: ''
  }

  handleChange = (value) => {
    this.props.onChangeText(value);
    this.setState({ text: value })
  }

  clearAll = () => {
    this.props.onClear();
    this.setState({ text: '' })
  }

  render() {

    return (

      <View style={styles.inputContainer}>
        <View style={styles.container}>

          <Icon style={styles.icon} name="md-search" size={28} />
          <TextInput
            placeholder='오늘은 어떤 쇼핑몰을 찾으세요?'
            style={styles.input}
            value={this.state.text}
            onChangeText={(value) => this.handleChange(value)}
          />

          {this.state.text === '' ?
            (<Icon style={styles.icon} name="md-mic" size={28} />) : (
              <TouchableOpacity onPress={this.clearAll}>
                <Icon style={styles.icon} name="md-close-circle" size={28} />
              </TouchableOpacity>
            )}
        </View>
      </View>
    )
  }
}

export default ProductSearchHeaderTitle

const styles = StyleSheet.create({
  inputContainer: {
    width: width - 95,
    backgroundColor: '#eee',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 8,
    height: 40
  },
  input: {
    width: 220,
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 10
  },
  container: {
    flexDirection: 'row', alignItems: 'center'
  }
})

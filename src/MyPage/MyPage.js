import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native'

import {connect} from 'react-redux'
import { toggleFlip, removeMyItem, removeAllMyItem } from '../actions'

import Icon from 'react-native-vector-icons/Ionicons'

import MyPageItems from '../Components/MyPageComponents/MyPageItems';
import MyPageNoItems from '../Components/MyPageComponents/MyPageNoItems';


class MyPage extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity style={styles.iconpadding} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={()=> navigation.navigate("ProductSearch")} >
        <Icon name="md-search" size={28} />
      </TouchableOpacity>
    )
  })

  goFurther = () => {

    this.props.removeAll();

    this.props.navigation.navigate("Sub")
  }

  makingAlert = () => {
    Alert.alert(
      'Your App',
      '결제를 진행하시겠습니까?',
      [
        {text: 'Cancel' },
        {text: 'Ok', onPress: () => { this.goFurther() }}
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View style={styles.flexone}>
        { this.props.myItems.length > 0 ?
          <MyPageItems
            AllItems={this.props.myItems}
            removeItem={this.props.removeItem}
            toggleFlipped={this.props.toggleFlipped}
            goFurther={this.makingAlert}
          /> : <MyPageNoItems />
        }
      </View>
    )
  }

}


const mapStateToProps = state => ({
  myItems: state.myInfo.myItems
})


const mapDispatchToProps = dispatch => ({
  toggleFlipped: (name) => dispatch(toggleFlip(name)),
  removeItem: (name) => dispatch(removeMyItem(name)),
  removeAll: () => dispatch(removeAllMyItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  iconpadding: {
    paddingRight: 10
  }
})

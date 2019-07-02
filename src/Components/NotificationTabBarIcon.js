import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import { connect } from 'react-redux';

const formatCount = count => {
  if(count > 5) {
    return "5+"
  }
  return count
}

const NotificationTabBarIcon = props => (

  props.count > 0 ? (
    <View style={styles.container}>
      <Text style={styles.textstyle}>
        {formatCount(props.count)}
      </Text>
    </View>
  ) : null
)

const mapStateToProps = state => ({
  count: state.myInfo.myItems.length
})

export default connect(mapStateToProps)(NotificationTabBarIcon)

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:1,
    right:-5,
    margin: 1,
    minWidth:13,
    height:13,
    borderRadius:7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  },
  textstyle: {
    color: '#FFF',
    textAlign: "center",
    fontSize: 9
  }
})

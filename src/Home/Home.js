import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl
} from 'react-native'

import { connect } from 'react-redux'
import { toggleLikes } from '../actions'

import Icon from 'react-native-vector-icons/Ionicons'

import HomeBannerUI01 from '../Components/HomeComponents/HomeBannerUI01'
import HomeBannerUI02 from '../Components/HomeComponents/HomeBannerUI02'
import HomeBannerUI03 from '../Components/HomeComponents/HomeBannerUI03'

import HomeTitle from '../Components/HomeComponents/HomeTitle'

import HomeUIOne from '../Components/HomeComponents/HomeUIOne'
import HomeUITwo from '../Components/HomeComponents/HomeUITwo'

import BoldText from '../Components/BoldText'
import ColorText from '../Components/ColorText'


class Home extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity style={styles.iconpadding} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}} onPress={()=> navigation.navigate("ProductSearch")} >
        <Icon name="md-search" size={28} />
      </TouchableOpacity>
    )
  })


  state = {
    refreshing: false,
    randomArr: [0,0,1]
  }


  randomNumbers = (length) => {

    this.setState({refreshing: true});
    let arr = [];
    let len = this.props.curatingData.length;

    for(var i = 0; i < len; i++) {
      let ranNum = Math.floor(Math.random() * length);
      arr.push(ranNum);
    }

    console.log(arr);
    this.setState({refreshing: false, randomArr: arr });
  }

  renderUI = () => {
    const arr = [0,0,1]

    const getRandomArr = this.state.randomArr;

    return (
      getRandomArr.map((cur, index) => {
        if(cur === 0) {
          return (
            <HomeUIOne
              items={this.props.curatingData[index]}
              gotoSub={this.props.navigation.navigate}
              toggleLikes={this.props.toggleLikes}
              key={index}
            />
          )
        } else if (cur === 1) {
          return (
            <HomeUITwo
              items={this.props.curatingData[index]}
              gotoSub={this.props.navigation.navigate}
              toggleLikes={this.props.toggleLikes}
              key={index}
            />
          )
        }
      })
    )

  }

  render() {

    return (
      <SafeAreaView style={styles.flexone}>
        <View style={[styles.flexone, { paddingBottom: 10 }]}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={()=> this.randomNumbers(2)}
            />
          }
        >

        <HomeBannerUI03 data={ this.props.curatingData[0].data } />

          <View style={styles.homecontentbox}>
            <Text style={styles.homemainpara}>
              <ColorText wantedColor="red">유진</ColorText>님을 위한 아이템
            </Text>

            { this.renderUI() }


          </View>


        </ScrollView>
        </View>
      </SafeAreaView>

    )
  }
}



const mapStateToProps = state => ({
  curatingData: state.curatingData
})

const mapDispatchToProps = dispatch => ({
  toggleLikes: (name, item) => dispatch(toggleLikes(name, item))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  iconpadding: {
    paddingRight: 10
  },
  flexone: {
    flex: 1
  },
  homecontentbox: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
  },
  homemainpara: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20
  }

})

import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from 'react-native'

import {connect} from 'react-redux'
import { toggleFavorites } from '../actions'

import ListItem4Ranking from '../Components/ListItem4Ranking'

import { makingRankingList } from '../utils/dataTransformation'


class RankingMall extends React.Component {

  state = {
    refreshing: false,
    isEnd: false
  }

  onEndReached = () => {
  	this.setState({isEnd: true})
  }

  onRefresh = () => {
    this.setState({ refreshing: true })

    this.list = makingRankingList(this.props.malls)
    this.setState({ refreshing: false })
  }

  _renderItem = ({item, index}) => {
    let tags = "";
    item.tags.forEach(cur => {
      tags += " #" + cur
    })

    return (
    <ListItem4Ranking
      ranking={index + 1}
      shoppingMall={item.shoppingMall}
      newArrivals={item.newArrivals}
      description={tags}
      logo={item.logo}
      favorites={item.favorites}
      key={item.shoppingMall}
      toggleFav={() => this.props.toggleFav(item.shoppingMall)}
      gotoDetail={() => this.props.navigation.navigate("Sub", { shoppingMall: item.shoppingMall, tags: tags, logo: item.logo })}
    />
  )}

  _renderSeparator = () => (
      <View style={styles.separator} />
  )

  _renderFooter = () => {
    return (<View style={styles.separator}/>)
  }

  makingFlat = () => {

    this.list = makingRankingList(this.props.malls);

    return (
      <FlatList
        data={this.list}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
        ListFooterComponent={this._renderFooter}
      />
    )
  }


  render() {
    return (
      <SafeAreaView style={styles.flexone}>
        <View style={styles.flexone}>
          {this.makingFlat()}
        </View>

      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    malls: state.shoppingData.malls
  }
}

const mapDispatchToProps = dispatch => ({
  toggleFav: (shoppingMall)=> dispatch(toggleFavorites(shoppingMall))
})

export default connect(mapStateToProps, mapDispatchToProps)(RankingMall)

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  separator: {
    height: 1, backgroundColor: '#CED0CE'
  },
  boxpadding: {
    padding: 10, justifyContent: 'center'
  }
})

import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import HomeSubLogoTitle from '../Components/HomeComponents/HomeSubLogoTitle'
import ListItem4HomeDetailProduct from '../Components/ListItem4HomeDetailProduct'
import { reshapePrice } from '../utils/dataTransformation'


class HomeSub extends React.Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: <HomeSubLogoTitle onPress={()=> navigation.goBack()} datas={{ firstItem: navigation.state.params["data"].slice(0,1), name: navigation.state.params.name }} />,
    headerLeft: null,
    headerStyle: {
      height: 200
    }
  })

  render() {

    const currentProps = this.props.navigation.state.params;

    return (
      <View style={styles.flexone}>

        <View style={styles.container}>
          <ScrollView>
          <View style={styles.scrollstyle}>

            { currentProps["data"].slice(1).map(cur => (
              <ListItem4HomeDetailProduct name={cur.name} price={cur.price} key={cur.name} img={cur.img}/>
            )) }

          </View>
          </ScrollView>
        </View>

      </View>
    )
  }
}

export default HomeSub

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  container: {
    flex: 1, padding: 10
  },
  scrollstyle: {
    flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'
  }
})

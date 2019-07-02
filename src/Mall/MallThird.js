import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native'

import ListItem4Favorite from '../Components/ListItem4Favorite'

const MallThird = ({ navigation }) => {

  const data = navigation.state.params.givenData;

  return (
    <View style={styles.flexone}>

    {data.malls.length > 0 ? (
      <ScrollView>
        <View style={styles.foldercontentbox}>
          <Text style={styles.foldername}>#{data.name} </Text>
          <Text style={styles.folderdate}>수정한 날짜: {data.date}</Text>
        </View>

        {data.malls.map(cur => {
          let tags = "";
          cur.tags.forEach(cur => {
            tags += " #" + cur
          })

          return (
            <ListItem4Favorite
              shoppingMall={cur.shoppingMall}
              newArrivals={cur.newArrivals}
              description={tags}
              logo={cur.logo}
              key={cur.shoppingMall}
              gotoDetail={()=> navigation.navigate("Sub", { shoppingMall: cur.shoppingMall, tags: tags, logo: cur.logo })}
            />
          )
        })}


      </ScrollView>
    ) : (
      <View style={styles.flexone}>
        <View style={styles.foldercontentbox}>
          <Text style={styles.foldername}>#{data.name} </Text>
          <Text style={styles.folderdate}>수정한 날짜: {data.date}</Text>
        </View>
        <View style={styles.container}>
          <Text>No Malls in your list</Text>
        </View>
      </View>

    )}


      <View style={styles.buttonmargin}>
        <Button title="Go Back" onPress={()=> navigation.goBack()} />
      </View>

    </View>
  )

}

export default MallThird


const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  foldercontentbox: {
    height: 100,
    backgroundColor: '#f7f7f7',
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  foldername: {
    fontSize: 28,
    color: 'red'
  },
  folderdate: {
    fontSize: 12,
    color: "#8d8d8d"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonmargin: {
    marginVertical: 20
  }
})

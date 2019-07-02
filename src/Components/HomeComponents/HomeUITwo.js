import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'

import HomeTitle from './HomeTitle';
import HomeScrollSecondEvenItem from './HomeScrollSecondEvenItem';
import HomeScrollSecondOddItem from './HomeScrollSecondOddItem';
import { makingArr } from '../../utils/dataTransformation'


const HomeUITwo = ({ items, gotoSub, toggleLikes }) => {

  const refactorItems = makingArr(items.data);

  return (
    <View style={styles.container}>

      <HomeTitle words={items.words} onPress={()=> gotoSub("Sub", { name: items.name, data: items.data })}/>

      <View style={styles.scrollstyle}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        { refactorItems.map((cur,index) => {

            if(cur.length === 2) {
              return (
                <HomeScrollSecondEvenItem key={index} name={items.name} firstItem={cur[0]} secondItem={cur[1]} onPress={toggleLikes} />
              )
            } else if (cur.length === 1) {
              return (
                <HomeScrollSecondOddItem key={index} name={items.name} firstItem={cur[0]} onPress={toggleLikes} />
              )
            }

        })}


        </ScrollView>
      </View>
    </View>

  )
}

export default HomeUITwo;


const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: 20
  },
  scrollstyle: {
    height: 240, marginTop: 10
  }
})

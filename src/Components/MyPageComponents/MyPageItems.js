import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { reshapePrice } from '../../utils/dataTransformation';

import ListItem4MyPage from '../ListItem4MyPage';

const calculateTotal = (items) => {

  let sum = 0;

  items.forEach(cur => {
    sum += cur.price*cur.count
  })

  return sum
}


const MyPageItems = ({ AllItems, goFurther, removeItem, toggleFlipped }) => (
  <View style={styles.flexone}>
    <View style={styles.headerstyle}>
      <Icon name="md-cart" size={28} />
      <Text style={styles.headertext}>Cart</Text>
      <View style={styles.textbox}>
        <Text style={styles.textboxtext}>{AllItems.length}</Text>
      </View>
    </View>

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      {AllItems.map((cur, index) => (
        <ListItem4MyPage
          title={cur.shoppingMall}
          name={cur.name}
          price={cur.price}
          tags={cur.tags}
          imageUri={cur.img}
          isFlipped={cur.isFlipped}
          count={cur.count}
          onRemove={()=> removeItem(cur.name)}
          onToggle={()=> toggleFlipped(cur.name)}
          key={index}
        />
      ))}

      </ScrollView>

      <TouchableOpacity onPress={goFurther}>
        <View style={styles.btntouch}>
          <Text style={styles.btntouchtext}><Text>{reshapePrice(calculateTotal(AllItems))}</Text> 결제하기</Text>
        </View>
      </TouchableOpacity>
    </View>



  </View>
)


export default MyPageItems;


const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerstyle: {
    height: 70, backgroundColor: 'yellow',
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
  },
  headertext: {
    fontSize: 20, marginHorizontal: 7
  },
  textbox: {
    width: 30, height: 30, borderRadius: 30,
    backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'
  },
  textboxtext: {
    color: 'white', fontWeight: 'bold'
  },
  btntouch: {
    marginVertical: 10,
    width: 300, height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center', backgroundColor: '#f61b65'
  },
  btntouchtext: {
    fontSize: 20, fontWeight: 'bold', color: '#fff'
  }
})

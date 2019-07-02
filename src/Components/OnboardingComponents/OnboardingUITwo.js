import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window');

const horizontalMargin = 20;
const slideWidth = 280;
const itemWidth = slideWidth + horizontalMargin * 2;


const OnboardingUITwo = ({ card, skip, selectDislike, selectLike }) => {

  const _checkBool = (bool) => {
    if (bool === true) {
      return { disColor: 'grey', likeColor: 'green'}
    } else if (bool === false) {
      return { disColor: 'red', likeColor: 'grey' }
    } else {
      return { disColor: 'grey', likeColor: 'grey' }
    }
  }

  const _renderItem = ({item, index}) => {

    const { disColor, likeColor } = _checkBool(item.isLiked);
    return (
      <View style={styles.rendershadowboxstyle}>
        <View style={styles.rendercontentbox}>

          <View style={styles.renderimagebox}>
            <Image
              source={item.img}
              style={styles.renderimage}
            />
          </View>

          <View style={styles.renderdesccontent}>
            <Text style={styles.renderdesccontentte}><Text style={styles.renderpink}>#</Text>{item.title}</Text>
            <Text style={styles.renderdesccontentxt} >{item.desc}</Text>
          </View>

          <View style={styles.rendertextcontent}>

            <TouchableOpacity onPress={()=> {selectDislike(item.title)}}>
              <View style={styles.rendercenter}>
              <Icon name="md-thumbs-down" color={disColor} size={42} />
              <Text style={[styles.rendermargintopstyle, {color: disColor}]}>별로예요</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {selectLike(item.title)}}>
              <View style={styles.rendercenter}>
                <Icon name="md-thumbs-up" color={likeColor} size={42} />
                <Text style={[styles.rendermargintopstyle, {color: likeColor}]}>내스타일!</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    )
  }

  return (
    <View style={styles.panel}>
      <View style={styles.contentbox}>
        <Text style={styles.contentboxtext}>당신의 스타일을 알려주세요.</Text>
      </View>

      <View style={styles.container}>
        <Carousel
          data={card}
          sliderWidth={width}
          itemWidth={itemWidth}
          renderItem={_renderItem}
          layout={'default'}
        />
      </View>

      <View style={styles.btntouch}>
        <TouchableOpacity onPress={skip}>
          <Text>건너뛰기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default OnboardingUITwo

const styles= StyleSheet.create({
  panel: {
    flex: 1,
    overflow: 'hidden',
    marginTop: 50
  },
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  contentbox: {
    marginBottom: 60, width: 240, paddingLeft: 40
  },
  contentboxtext: {
    fontSize: 26, color: '#f61b65'
  },
  btntouch: {
    flex:0.5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 10, paddingTop: 20
  },
  rendershadowboxstyle: {
    margin: 5,
    borderRadius: 5,
    width: itemWidth,
    paddingHorizontal: horizontalMargin,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0}, shadowColor: 'black', shadowOpacity: 0.8, elevation: 5
  },
  rendercontentbox: {
    width: slideWidth, flex: 1
  },
  renderimage: {
    width: 150, height: 150, borderRadius: 150, resizeMode: 'cover'
  },
  renderimagebox: {
    flex: 2, justifyContent: 'center', alignItems: 'center'
  },
  renderdesccontent: {
    flex: 0.5, justifyContent: 'center', alignItems: 'center'
  },
  renderdesccontentte: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 5
  },
  renderdesccontentxt: {
    fontSize: 14, color:'#919191'
  },
  rendertextcontent: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 10
  },
  rendercenter: {
    justifyContent: 'center', alignItems: 'center'
  },
  rendermargintopstyle: {
    marginTop: 5
  },
  renderpink: {
    color: 'pink'
  }
})

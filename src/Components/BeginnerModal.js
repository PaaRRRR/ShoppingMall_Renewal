import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native'

import ColorText from './ColorText';
import Icon from 'react-native-vector-icons/Ionicons'

const BeginnerModal = ({ toggleModal, modalVisible }) => (
  <Modal
    visible={modalVisible}
    transparent={false}
    animationType="fade"
    onRequestClose={toggleModal}
  >

    <View style={styles.container}>

      <View style={styles.btntouch}>
        <TouchableOpacity onPress={toggleModal} >
          <Icon name="md-close-circle-outline" color='white' size={56} />
        </TouchableOpacity>
      </View>


      <View style={styles.firstcontent}>
        <View style={[styles.tagBtn, { marginBottom: 20, backgroundColor: 'white', position: 'relative', top: 12, left: -22 }]}>
          <Icon name="md-albums" color="red" size={24} />
          <Text style={styles.redtext}>태그</Text>
        </View>
        <Text style={styles.middlewhitetext}>
          쇼핑몰을 <ColorText wantedColor="red">태그</ColorText>별로 정리해 보세요.
        </Text>
      </View>

      <View style={styles.secondcontent}>
        <View style={{flex: 1, width: 150, position: 'relative', left: 85}}>
          <Image
            source={require('../../imgs/group-4.png')}
            style={styles.secondcontentimg}
          />
          <Text style={styles.smallwhitetext}> 유진님이 즐겨찾기한 쇼핑몰을 <ColorText wantedColor="red">해시태그</ColorText>별로 모아봤어요! </Text>
        </View>
      </View>



      <View style={styles.thirdcontent}>

        <View style={{flex: 1, width: 150, justifyContent: 'center', alignItems: 'center', position: 'relative', top: -20}}>
          <View style={styles.thirdcontentimgbox}>
            <Image
              source={require('../../imgs/group-6.png')}
              style={styles.thirdcontentimg}
            />
          </View>
          <Text style={styles.middlewhitetext}> 언제든 <ColorText wantedColor="red">새로운 태그</ColorText>를 추가할 수 있어요! </Text>
        </View>

      </View>


    </View>

  </Modal>
)

export default BeginnerModal;


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "black", opacity: 0.9
  },
  btntouch: {
     height: 100,  justifyContent: 'center', alignItems: 'center'
  },
  firstcontent: {
    height: 100,  justifyContent: 'center', alignItems: 'center'
  },
  secondcontent: {
    height: 240,  justifyContent: 'center', alignItems: 'center'
  },
  secondcontentimg: {
    width: 150, height: 150, resizeMode: 'contain', marginBottom: 10, marginTop: 25
  },
  thirdcontent: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  thirdcontentimgbox: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderRadius: 120,
    borderWidth: 1,
    borderColor: 'red', marginBottom: 10, marginTop: 25
  },
  thirdcontentimg: {
    width: 50, height: 77, resizeMode: 'contain'
  },
  tagBtn: {
    width: 96,
    height: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'red'
  },
  redtext: {
    fontSize: 16, marginLeft: 10, color: 'red'
  },
  middlewhitetext: {
    color: 'white', fontSize: 14
  },
  smallwhitetext: {
    color: 'white', fontSize: 12
  }
})

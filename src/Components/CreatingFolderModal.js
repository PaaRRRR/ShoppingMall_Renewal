import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import ColorText from './ColorText';
import ListItem4MakingFolder from './ListItem4MakingFolder'


class CreatingFolderModal extends React.Component {

  folderName = '';

  _renderItem = ({item, index}) => {
    return (
    <ListItem4MakingFolder
      shoppingMall={item.shoppingMall}
      description={item.tags}
      logo={item.logo}
      favorites={item.favorites}
      key={item.shoppingMall}
      onPress={() => this.props.toggleLikes(item.shoppingMall)}
    />
  )}

  _renderSeparator = () => (
      <View style={styles.rendersepa} />
  )

  _renderFooter = () => {
    return (<View style={styles.renderfooter}><ActivityIndicator /></View>)
  }

  _handleTextChange = (value) => {
    this.props.handleTextChange(value);
    this.folderName = value;
  }

  render() {

    return (
      <Modal
        visible={this.props.modalVisible}
        transparent={false}
        animationType="slide"
        onRequestClose={this.props.toggleModal}
      >

          {!this.props.isSecond ? (
            <View style={styles.firstcontainer}>
              <View style={styles.firstcontent}>
                <Text style={styles.firstcontenttext}>새로운 폴더 명</Text>
                <TextInput
                  value={this.props.folderName}
                  onChangeText={(value)=> this._handleTextChange(value)}
                  placeholder="폴더명을 입력해주세요"
                  style={styles.firstcontenttextinput}
                />
                <View style={styles.firstcontentbtntouch}>
                  <TouchableOpacity onPress={this.props.toggleModal} >
                    <Text style={styles.firstcanceltext}>취소</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.startMakingFolder(this.folderName)} >
                    <Text style={styles.firstoktext}>저장</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.secondcontainer}>

              <View style={styles.secondcontent}>
                <Text style={styles.secondcontenttext}>{this.props.folderName }</Text>

                <View style={styles.secondbtntouch}>
                  <TouchableOpacity onPress={this.props.toggleAllMalls}>
                    <Icon name={this.props.isChecked ? "md-square" : "md-square-outline" } size={20} />
                  </TouchableOpacity>
                  <Text style={styles.marginleftstyle}>전체 선택({this.props.malls.length})</Text>
                </View>
              </View>

              <FlatList
                data={this.props.malls}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this._renderSeparator}
                ListFooterComponent={this._renderFooter}
              />

              <View style={styles.secondfinalbtn}>
                <TouchableOpacity onPress={this.props.createFolder} >
                  <Text style={styles.secondfinalbtntext}>
                    <ColorText wantedColor="red">{this.props.count}개</ColorText>쇼핑몰 추가하기
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          )
        }
      </Modal>
    )
  }
}


export default CreatingFolderModal;

const styles = StyleSheet.create({
  rendersepa: {
    height: 1, backgroundColor: '#CED0CE'
  },
  renderfooter: {
    height: 100, paddingVertical: 20, borderWidth: 1, borderTopColor: "#CED0CE"
  },
  firstcontainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "black"
  },
  firstcontent: {
    width: 300, height: 150, borderRadius: 20, padding: 20, backgroundColor: 'white'
  },
  firstcontenttext: {
    fontSize: 20, fontWeight: '700'
  },
  firstcontenttextinput: {
    borderBottomColor: 'red', borderBottomWidth: 1
  },
  firstcontentbtntouch: {
    alignSelf: 'flex-end', marginTop: 10, flexDirection: 'row'
  },
  firstcanceltext: {
    fontSize: 16, color: 'red', marginRight: 10
  },
  firstoktext: {
    fontSize: 16, color: 'red'
  },
  secondcontainer: {
    flex: 1, backgroundColor: 'white'
  },
  secondcontent: {
    height: 100,
    backgroundColor: '#f7f7f7',
    paddingVertical: 5,
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  secondcontenttext: {
    fontSize: 32, color: 'red'
  },
  secondbtntouch: {
    flexDirection: 'row', alignItems: 'center'
  },
  marginleftstyle: {
    marginLeft:5
  },
  secondfinalbtn: {
    height: 100,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', bottom: 0
  },
  secondfinalbtntext: {
    fontSize: 28, color: 'white'
  }
})

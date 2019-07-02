import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native'

import {connect} from 'react-redux'
import { createFolder, removeFolder } from '../actions'

import Icon from 'react-native-vector-icons/Ionicons'

import ColorText from '../Components/ColorText'
import ListItem4Favorite from '../Components/ListItem4Favorite'
import FavorMallFolder from '../Components/MallComponents/FavorMallFolder'


class FavorMall extends React.Component {

  count = 0;

  reFactorMalls = this.props.malls.map(cur=> ({
    ...cur, favorites: false
  }))
  reFactorMalls = JSON.parse(JSON.stringify(this.reFactorMalls));

  state = {
    isList: true,
    modalVisible: false,
    beginnerModalVisible: true,
    folderName: '',
    isSecond: false,
    malls: this.reFactorMalls,
    isChecked: false,
  }

  toggleHandler = () => {
    this.setState((prevState) => ({
      isList: !prevState.isList
    }))
  }

  handleTextChange = (value) => {
    this.setState({ folderName : value})
  }

  toggleModal = (name) => {
    this.setState((prevState) => ({
      [name]: !prevState[name],
      folderName: ''
    }))
  }

  toggleSecond = () => {
    this.setState((prevState) => ({
      isSecond: !prevState.isSecond
    }))
  }

  startMakingFolder = (word) => {
    if(this.validateFolder(word)) {
      this.toggleSecond();

    } else {
      console.log('wrong!')
    }
  }

  makingAlert = (text) => {
    Alert.alert(
      'Your App',
      text,
      [
        {text: 'Ok'}
      ],
      { cancelable: true }
    );
  }

  validateFolder = (word) => {
    const folders = this.props.myFolders;
    let len = folders.length;
    let msg = "";

    if(word.length > 0 && word.length <= 11) {
      for(let i = 0; i < len; i++) {
        if(folders[i].name === word) {
          msg = "같은 이름의 폴더가 이미 있습니다."
          this.makingAlert(msg);
          return false;
        }
      }
      return true;
    } else if(word.length > 11) {
      msg="폴더명이 너무 길어요. 11자 이내로 작성해주세요!";
      this.makingAlert(msg);
      return false;
    } else {
      msg = "폴더명을 입력해 주세요."
      this.makingAlert(msg);
      return false
    }
  }

  createFolder = () => {
    let chosenMalls = this.state.malls.filter(cur => cur.favorites);

    chosenMalls = JSON.parse(JSON.stringify(chosenMalls))

    this.props.createFolder(this.state.folderName, "2019.06.06", chosenMalls)

    let reFactorMalls = this.props.malls.map(cur=> ({
      ...cur, favorites: false
    }))
    reFactorMalls = JSON.parse(JSON.stringify(reFactorMalls));


    this.setState({
      modalVisible: false,
      folderName: '',
      isSecond: false,
      malls: reFactorMalls,
      isChecked: false,
     });

     this.count = 0;
  }


  toggleLikes = (item) => {
    const newMalls = this.state.malls.map(cur => {
      if(cur.shoppingMall === item) {
        if(cur.favorites) {
          this.count--;
          if(this.count <= 0) {
            this.count = 0;
          }
        } else {
          this.count++;
        }

        return {...cur, favorites: !cur.favorites}

      } else {
        return cur
      }
    })

    this.setState({ malls: newMalls })
  }

  toggleAllMalls = () => {
    let newMalls;
    if(this.state.isChecked) {
      newMalls = this.state.malls.map(cur => {
        return {...cur, favorites: false}
      });
      this.count = 0;
    } else {
      newMalls = this.state.malls.map(cur => {
        return {...cur, favorites: true}
      });
      this.count = this.state.malls.length;
    }

    this.setState({ malls: newMalls, isChecked: !this.state.isChecked })
  }

  render() {
    return (
      <SafeAreaView style={styles.flexone}>
        <View style={styles.flexone}>

            <ScrollView>

            <View style={styles.scrollstyle}>

              <View style={styles.firstcontent}>
                <TouchableOpacity onPress={this.state.isList ? null : this.toggleHandler}>
                  <View style={[styles.tagBtn, (this.state.isList ? styles.borderColored : {})]}>
                    <Icon name="md-list" color={this.state.isList ? 'red' : 'grey'} size={24} />
                    <Text style={[styles.tagtext, (this.state.isList ? styles.textColored : styles.textUnColored)]}>전체</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={!this.state.isList ? null : this.toggleHandler}>
                  <View style={[styles.tagBtn, { marginLeft: 10 }, (!this.state.isList ? styles.borderColored : {})]}>
                    <Icon name="md-albums" color={!this.state.isList ? 'red' : 'grey'} size={24} />
                    <Text style={[styles.tagtext, (!this.state.isList ? styles.textColored : styles.textUnColored)]}>태그</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.secondcontent}>
                <View>
                  {this.state.isList ?
                    (<Text style={styles.midtext}>
                        <ColorText wantedColor="red">{this.props.myMalls.length}</ColorText>개의 쇼핑몰
                      </Text>
                    ) : (
                      <Text style={styles.midtext}>
                        <ColorText wantedColor="red">{this.props.myFolders.length}</ColorText>개의 폴더
                      </Text>
                    )}
                </View>
                <View>
                  <Text style={styles.editbtn}>편집하기</Text>
                </View>
              </View>

            </View>

              {this.state.isList ?
                (this.props.myMalls.map(cur => {
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
                      gotoDetail={()=> this.props.navigation.navigate("Sub", { shoppingMall: cur.shoppingMall, tags: tags, logo: cur.logo })}
                    />
                  )

                }))
                : (
                  <FavorMallFolder
                    FavorMallFolderBtn={this.props.navigation.navigate}
                    allProps={this.state}
                    myFolders={this.props.myFolders}
                    count={this.count}
                    toggleModal={this.toggleModal}
                    startMakingFolder={this.startMakingFolder}
                    createFolder={this.createFolder}
                    handleTextChange={this.handleTextChange}
                    toggleLikes={this.toggleLikes}
                    toggleAllMalls={this.toggleAllMalls}
                    removeFolder={this.props.removeFolder}
                  />
                )
              }

            </ScrollView>
        </View>

      </SafeAreaView>
    )
  }
}


const mapStateToProps = state => ({
  malls: state.shoppingData.malls,
  myMalls: state.myInfo.myMalls,
  myFolders: state.myInfo.myFolders
})

const mapDispatchToProps = dispatch => ({
  removeFolder: (name) => dispatch(removeFolder(name)),
  createFolder: (name, date, malls) => dispatch(createFolder(name, date, malls))
})


export default connect(mapStateToProps, mapDispatchToProps)(FavorMall)

const styles = StyleSheet.create({
  flexone: {
    flex: 1
  },
  scrollstyle: {
    height: 100,  backgroundColor: '#f7f7f7', paddingVertical: 10, paddingHorizontal: 30
  },
  firstcontent: {
    flex: 2, flexDirection: 'row', alignItems: 'center'
  },
  secondcontent: {
    flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  tagBtn: {
    width: 96,
    height: 38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey'
  },
  tagtext: {
    fontSize: 16, marginLeft: 10
  },
  borderColored: {
    borderColor: 'red'
  },
  textColored: {
    color: 'red'
  },
  textUnColored: {
    color: 'grey'
  },
  midtext: {
    fontSize: 14
  },
  editbtn: {
    color: '#ddd', fontSize: 12
  }
})
